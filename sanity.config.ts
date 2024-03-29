import { table } from '@sanity/table';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { myTheme } from './sanity.theme';
import { schemaTypes } from './schemas';
import { getDefaultDocumentNode } from './structure';

export default defineConfig({
  basePath: '/studio',
  name: 'VBC_studio',
  title: 'VBC Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    deskTool({ defaultDocumentNode: getDefaultDocumentNode }),
    visionTool(),
    table(),
  ],
  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
});
