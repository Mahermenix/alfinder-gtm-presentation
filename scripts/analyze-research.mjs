import data from '../app/data/content.json' assert { type: 'json' };

const research = data.research;
const bySlug = {};

research.forEach(r => {
  const cat = r.slug.split('/')[0];
  if (!bySlug[cat]) bySlug[cat] = [];
  bySlug[cat].push(r);
});

Object.entries(bySlug).forEach(([cat, files]) => {
  const sorted = files.sort((a, b) => a.slug.localeCompare(b.slug));
  console.log(`\n${cat.toUpperCase()} (${files.length} files):`);
  sorted.slice(-3).forEach(f => console.log('  ' + f.slug));
});
