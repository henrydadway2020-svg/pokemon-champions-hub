# Pokémon Champions Hub

Hub informativo para la comunidad competitiva de Pokémon: torneos, noticias, tier list, Pokémon más usados, guías y videos destacados.

Este es el **esqueleto inicial** del sitio. Usa datos de ejemplo (`src/data/sampleData.ts`) mientras se conecta la base de datos real (Cloudflare D1).

## Stack

- **Astro** (modo SSR) — renderiza cada página en el momento de la petición.
- **Cloudflare Pages** — hosting + funciones serverless.
- **Cloudflare D1** — base de datos SQL (esquema en `schema.sql`).
- **Cloudflare R2** — almacenamiento de banners/imágenes.
- **Cloudflare Access** — protege `/admin/*` sin necesidad de código de autenticación propio.

## Estructura del proyecto

```
src/
  layouts/BaseLayout.astro       → layout compartido (header + footer)
  components/                    → Header, Footer, TournamentCard, StatusBadge
  data/
    types.ts                     → tipos del modelo de datos
    sampleData.ts                → datos de ejemplo (temporal)
  pages/
    index.astro                  → Home
    torneos/index.astro          → listado con filtro por estado
    torneos/[slug].astro         → página individual de torneo
    noticias/                    → listado + página individual
    tier-list.astro
    mas-usados.astro
    guias/index.astro
    videos.astro
    admin/                       → panel de administración (protegido por Access)
  styles/global.css              → variables de color, tipografía, componentes base
schema.sql                       → esquema de la base de datos D1
wrangler.toml                    → configuración de Cloudflare (Pages, D1, R2)
```

## Primeros pasos

1. Instalar dependencias:
   ```
   npm install
   ```

2. Correr en desarrollo:
   ```
   npm run dev
   ```

## Conectar Cloudflare D1

1. Crear la base de datos:
   ```
   wrangler d1 create pokemon_champions_hub
   ```
2. Copiar el `database_id` que devuelve el comando anterior a `wrangler.toml`.
3. Aplicar el esquema:
   ```
   wrangler d1 execute pokemon_champions_hub --file=./schema.sql
   ```
4. (Pendiente) Reemplazar las funciones en `src/data/sampleData.ts` por consultas reales a `DB` (el binding de D1 disponible en `Astro.locals.runtime.env.DB`).

## Proteger el panel admin con Cloudflare Access

1. En el dashboard de Cloudflare → Zero Trust → Access → Applications.
2. Crear una aplicación de tipo "Self-hosted" apuntando al dominio del sitio, con path `/admin/*`.
3. Definir la política de acceso (por ejemplo, solo tu correo o un dominio de correo específico).
4. Listo — no se necesita código adicional para el login.

## Desplegar en Cloudflare Pages

```
npm run build
wrangler pages deploy dist
```

O conectar el repositorio directamente desde el dashboard de Cloudflare Pages para despliegues automáticos en cada push.

## Próximos pasos sugeridos

- [ ] Crear `src/lib/db.ts` con las funciones de consulta a D1 y reemplazar `sampleData.ts`.
- [ ] Construir los formularios de creación/edición en `/admin/torneos/nuevo` y `/admin/torneos/[id]/editar`.
- [ ] Integrar un editor de texto enriquecido (ej. Tiptap) para reglas, noticias y guías.
- [ ] Subir imágenes a R2 desde el panel admin.
- [ ] Configurar Cloudflare Access sobre `/admin/*`.
