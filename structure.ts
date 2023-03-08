import Iframe from 'sanity-plugin-iframe-pane';
import type { DefaultDocumentNodeResolver } from 'sanity/desk';

/* 
SANITY STUIDO PREVIEW PANEL
*/

function getPreviewUrl() {
  return `${
    process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
  }/api/preview`;
}

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType },
) => {
  if (schemaType === 'post') {
    switch (schemaType) {
      case `post`:
        return S.document().views([
          S.view.form(),
          S.view
            .component(Iframe)
            .options({
              url: () => getPreviewUrl(),
              defaultSize: 'desktop',
              reload: {
                button: true,
              },
            })
            .title('Preview'),
        ]);
      default:
        return S.document().views([S.view.form()]);
    }
  }
};
