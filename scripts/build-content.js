#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const GTM_STORIES_PATH = path.resolve(__dirname, '../../01-Strategy-Planning/GTM-Strategy-Plan/Stories');
const RESEARCH_PATH = path.resolve(__dirname, '../../02-Market-Intelligence');
const STRATEGY_PATH = path.resolve(__dirname, '../../01-Strategy-Planning');
const OUTPUT_PATH = path.resolve(__dirname, '../app/data');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_PATH)) {
  fs.mkdirSync(OUTPUT_PATH, { recursive: true });
}

console.log('🔨 Building content from markdown files...');

// Read and parse markdown files
function readMarkdownFiles(dirPath, category = '') {
  const files = [];

  if (!fs.existsSync(dirPath)) {
    console.warn(`⚠️  Directory not found: ${dirPath}`);
    return files;
  }

  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);

    if (item.isDirectory()) {
      const subFiles = readMarkdownFiles(fullPath, item.name);
      files.push(...subFiles);
    } else if (item.name.endsWith('.md')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const slug = item.name.replace('.md', '');

        files.push({
          slug: category ? `${category}/${slug}` : slug,
          title: extractTitle(content, slug),
          content: content,
          category: category,
        });
      } catch (error) {
        console.error(`Error reading file ${fullPath}:`, error.message);
      }
    }
  }

  return files;
}

// Extract title from markdown content
function extractTitle(content, fallback) {
  const titleMatch = content.match(/^#\s+(.+)$/m);
  if (titleMatch) {
    let title = titleMatch[1].trim();
    // Remove "Story X: ", "Research Story: ", "01 - ", etc.
    title = title
      .replace(/^(Research\s+)?Story(\s+\d+)?[:\s-]*/i, '')
      .replace(/^\d+\s*[-:]\s*/, '')
      .trim();
    return title;
  }

  const frontmatterMatch = content.match(/^title:\s*(.+)$/m);
  if (frontmatterMatch) {
    return frontmatterMatch[1].trim().replace(/^["']|["']$/g, '');
  }

  return fallback
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Build content
const gtmStories = readMarkdownFiles(GTM_STORIES_PATH);
const researchFiles = readMarkdownFiles(RESEARCH_PATH);
const strategyFiles = readMarkdownFiles(STRATEGY_PATH);

// Only write output if we actually found content (not on Vercel where source doesn't exist)
if (gtmStories.length > 0 || researchFiles.length > 0) {
  const output = {
    gtm: gtmStories,
    research: researchFiles,
    strategy: strategyFiles,
    buildDate: new Date().toISOString(),
  };

  fs.writeFileSync(
    path.join(OUTPUT_PATH, 'content.json'),
    JSON.stringify(output, null, 2)
  );

  console.log(`✅ Built content from ${gtmStories.length} GTM stories and ${researchFiles.length} research files`);
  console.log(`📁 Output written to ${OUTPUT_PATH}/content.json`);
} else {
  console.log('ℹ️  No source content found, using existing content.json');
  console.log('   (This is expected on Vercel where the source files are in a different location)');
}
