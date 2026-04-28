import fs from 'fs';
import path from 'path';

async function fetchCities() {
  console.log('Fetching cities with population > 2000 from geo.api.gouv.fr...');
  try {
    const res = await fetch('https://geo.api.gouv.fr/communes?fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre');
    const data = await res.json();
    
    const filteredCities = data
      .filter(c => c.population && c.population > 2000 && c.codesPostaux && c.codesPostaux.length > 0)
      .sort((a, b) => b.population - a.population); // Sort by population descending

    console.log(`Found ${filteredCities.length} cities matching criteria.`);

    // Map departments and regions roughly or fetch them. For simplicity:
    const deptsRaw = await fetch('https://geo.api.gouv.fr/departements?fields=nom,code,codeRegion');
    const depts = await deptsRaw.json();
    const deptMap = {};
    depts.forEach(d => deptMap[d.code] = d.nom);

    const regionsRaw = await fetch('https://geo.api.gouv.fr/regions?fields=nom,code');
    const regions = await regionsRaw.json();
    const regionMap = {};
    regions.forEach(r => regionMap[r.code] = r.nom);

    const slugify = (text) => text.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
      .replace(/(^-|-$)/g, ''); // Trim hyphens

    const citiesTs = [];
    
    for (const c of filteredCities) {
      // Pick first zip code
      const zip = c.codesPostaux[0];
      const deptName = deptMap[c.codeDepartement] || `Département ${c.codeDepartement}`;
      const regionName = regionMap[c.codeRegion] || `Région ${c.codeRegion}`;
      
      const cityObj = {
        slug: slugify(c.nom),
        name: c.nom,
        zip: zip,
        deptName: deptName,
        region: regionName,
        deptCode: c.codeDepartement
      };
      citiesTs.push(cityObj);
    }

    const output = `export interface City {
  slug: string;
  name: string;
  zip: string;
  deptName: string;
  region: string;
  deptCode: string;
}

export const cities: City[] = ${JSON.stringify(citiesTs, null, 2)};
`;

    fs.writeFileSync(path.join(process.cwd(), 'src/data/cities-fr.ts'), output);
    console.log('✅ src/data/cities-fr.ts generated successfully.');
    
  } catch (err) {
    console.error('Error fetching cities:', err);
  }
}

fetchCities();
