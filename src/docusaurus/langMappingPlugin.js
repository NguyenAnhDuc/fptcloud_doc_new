/**
 * Docusaurus plugin: Language URL Mapping
 *
 * Loads a pre-generated static mapping file (lang-url-mapping.json)
 * created by scripts/generate-lang-mapping.js.
 *
 * Mapping sources (in priority order):
 * 1. Same filename match — file exists with identical name in target language
 * 2. Content equivalence — matched by shared images + heading structure (from migration-report.json)
 * 3. Section index fallback — redirects to module overview page
 */

import { readFileSync } from 'fs';
import { join } from 'path';

export default function langMappingPlugin(context) {
  return {
    name: 'lang-mapping-plugin',

    async loadContent() {
      try {
        const mappingPath = join(context.siteDir, 'src', 'docusaurus', 'lang-url-mapping.json');
        const raw = readFileSync(mappingPath, 'utf-8');
        return JSON.parse(raw);
      } catch (err) {
        console.warn('[lang-mapping-plugin] Failed to load lang-url-mapping.json:', err.message);
        return {};
      }
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ urlMapping: content });
    },
  };
}
