
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-2025/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-2025"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 681, hash: '79215f88d8eac07ec0ce3cd789be7482df0a969e29a9cda97203b14c98f22f57', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '8ee56d204c24f32b50aead674a09c1cef864c7b8a02e07dac45c4ca2a13e137a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28136, hash: '68ac89399423cd7f25a3e710352043e42f7bbaabf442fe7890c611d32173ae43', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XOUAPHS3.css': {size: 117, hash: 'A06MYaFgWow', text: () => import('./assets-chunks/styles-XOUAPHS3_css.mjs').then(m => m.default)}
  },
};
