import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// Modo 'server' (SSR): cada página se genera en el momento de la petición,
// consultando D1 directamente. Así los cambios del admin (ej. estado de un
// torneo) se ven al instante en el sitio, sin necesidad de re-desplegar.
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: { enabled: true },
    imageService: 'cloudflare',
  }),
});
