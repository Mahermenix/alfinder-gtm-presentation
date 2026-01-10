#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CONTENT_PATH = path.resolve(__dirname, '../app/data/content.json');
const data = JSON.parse(fs.readFileSync(CONTENT_PATH, 'utf-8'));

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
  sorted.forEach(f => console.log('  ' + f.slug));
});

// Also show research files that don't start with category prefix
console.log('\n\n--- RESEARCH FILES WITHOUT CLEAR CATEGORY ---');
const researchCategoryFiles = research.filter(r => r.slug.startsWith('research/'));
const bySubFolder = {};
researchCategoryFiles.forEach(r => {
  const parts = r.slug.split('/');
  if (parts[0] === 'research') {
    const sub = parts[1] || 'root';
    if (!bySubFolder[sub]) bySubFolder[sub] = [];
    bySubFolder[sub].push(r);
  }
});
Object.entries(bySubFolder).sort().forEach(([sub, files]) => {
  console.log(`\nresearch/${sub} (${files.length} files):`);
  files.forEach(f => console.log('  ' + f.slug));
});
