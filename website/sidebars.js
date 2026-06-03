import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chaptersDir = path.resolve(__dirname, '../chapters');

/**
 * Automatically generates sidebar categories based on the file naming pattern:
 * NN-MM-title.md -> Section NN, Chapter MM
 */
function generateSidebar() {
  if (!fs.existsSync(chaptersDir)) {
    return [];
  }

  const files = fs.readdirSync(chaptersDir)
    .filter(f => f.endsWith('.md'))
    .sort();

  const sections = {};

  files.forEach(file => {
    // Pattern: 01-01-title.md
    const match = file.match(/^(\d+)-(\d+)-(.*)\.md$/);
    if (match) {
      const sectionNum = parseInt(match[1], 10);
      // Docusaurus doc ID is the filename without extension
      const docId = file.replace(/\.md$/, '');

      if (!sections[sectionNum]) {
        sections[sectionNum] = {
          type: 'category',
          label: `Раздел ${sectionNum}`,
          collapsible: true,
          collapsed: false,
          items: [],
        };
      }
      sections[sectionNum].items.push(docId);
    } else {
      // Fallback for files that don't match the pattern (like README.md if any)
      const docId = file.replace(/\.md$/, '');
      if (!sections['other']) {
        sections['other'] = {
          type: 'category',
          label: 'Прочее',
          items: [],
        };
      }
      sections['other'].items.push(docId);
    }
  });

  return Object.values(sections);
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: generateSidebar(),
};

export default sidebars;
