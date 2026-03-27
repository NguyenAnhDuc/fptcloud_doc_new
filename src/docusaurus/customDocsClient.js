/**
 * Custom wrapper for @docusaurus/plugin-content-docs/client
 * Re-exports everything from the original, but overrides useDocsContextualSearchTags
 * to only return the ACTIVE plugin's tag — scoping search to the current language.
 */

// Re-export all exports from original (except useDocsContextualSearchTags which we override)
export {
  useDocById,
  findSidebarCategory,
  findFirstSidebarItemLink,
  isActiveSidebarItem,
  isVisibleSidebarItem,
  useVisibleSidebarItems,
  useSidebarBreadcrumbs,
  useDocsVersionCandidates,
  useLayoutDoc,
  useLayoutDocsSidebar,
  useDocRootMetadata,
  useCurrentSidebarCategory,
  useCurrentSidebarSiblings,
  filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/lib/client/docsUtils.js';

export { useDocsPreferredVersion, useDocsPreferredVersionByPluginId, DocsPreferredVersionContextProvider } from '@docusaurus/plugin-content-docs/lib/client/docsPreferredVersion.js';
export { DocSidebarItemsExpandedStateProvider, useDocSidebarItemsExpandedState } from '@docusaurus/plugin-content-docs/lib/client/docSidebarItemsExpandedState.js';
export { DocsVersionProvider, useDocsVersion } from '@docusaurus/plugin-content-docs/lib/client/docsVersion.js';
export { DocsSidebarProvider, useDocsSidebar } from '@docusaurus/plugin-content-docs/lib/client/docsSidebar.js';
export { DocProvider, useDoc } from '@docusaurus/plugin-content-docs/lib/client/doc.js';
export { getDocsVersionSearchTag } from '@docusaurus/plugin-content-docs/lib/client/docsSearch.js';
export { useBreadcrumbsStructuredData } from '@docusaurus/plugin-content-docs/lib/client/structuredDataUtils.js';

export {
  useAllDocsData,
  useDocsData,
  useActivePlugin,
  useActivePluginAndVersion,
  useVersions,
  useLatestVersion,
  useActiveVersion,
  useActiveDocContext,
  useDocVersionSuggestions,
} from '@docusaurus/plugin-content-docs/lib/client/index.js';

// Override: only return the active plugin's search tag instead of all plugins
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/lib/client/index.js';
import { getDocsVersionSearchTag } from '@docusaurus/plugin-content-docs/lib/client/docsSearch.js';

export function useDocsContextualSearchTags() {
  const active = useActivePluginAndVersion();
  if (!active) return [];
  const { activePlugin, activeVersion } = active;
  return [getDocsVersionSearchTag(activePlugin.pluginId, activeVersion.name)];
}
