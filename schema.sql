-- Pokémon Champions Hub — esquema de base de datos (Cloudflare D1 / SQLite)
-- Aplicar con: wrangler d1 execute pokemon_champions_hub --file=./schema.sql

CREATE TABLE IF NOT EXISTS tournaments (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  nombre TEXT NOT NULL,
  banner_url TEXT,
  formato TEXT NOT NULL,
  fecha_inicio TEXT NOT NULL,      -- ISO 8601
  fecha_fin TEXT,
  modalidad TEXT NOT NULL,         -- 'online' | 'presencial'
  ubicacion TEXT,
  organizador TEXT NOT NULL,
  reglas TEXT,                     -- HTML/markdown
  premios TEXT,                    -- JSON: [{ "puesto": "1er lugar", "premio": "..." }]
  enlace_inscripcion TEXT,
  estado TEXT NOT NULL DEFAULT 'abierto'
    CHECK (estado IN ('abierto', 'cerrado', 'en_curso', 'finalizado')),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS news (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  titulo TEXT NOT NULL,
  resumen TEXT,
  contenido TEXT NOT NULL,
  imagen_destacada TEXT,
  categoria TEXT,
  fecha_publicacion TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS guides (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  titulo TEXT NOT NULL,
  contenido TEXT NOT NULL,
  categoria TEXT,
  imagen_destacada TEXT,
  fecha_publicacion TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS videos (
  id TEXT PRIMARY KEY,
  titulo TEXT NOT NULL,
  url_embed TEXT NOT NULL,
  thumbnail TEXT,
  categoria TEXT,
  fecha TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS tier_list_entries (
  id TEXT PRIMARY KEY,
  pokemon_nombre TEXT NOT NULL,
  pokemon_sprite_url TEXT,
  tier TEXT NOT NULL,          -- 'S' | 'A' | 'B' | 'C' | ...
  formato TEXT NOT NULL,
  comentario TEXT,
  orden INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS usage_entries (
  id TEXT PRIMARY KEY,
  pokemon_nombre TEXT NOT NULL,
  pokemon_sprite_url TEXT,
  formato TEXT NOT NULL,
  porcentaje_uso REAL,
  orden INTEGER NOT NULL DEFAULT 0,
  periodo TEXT NOT NULL         -- ej. '2026-07'
);

-- El login del admin se resuelve preferentemente con Cloudflare Access
-- (sin código propio). Esta tabla queda como alternativa si se implementa
-- autenticación propia más adelante.
CREATE TABLE IF NOT EXISTS admin_users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_tournaments_estado ON tournaments(estado);
CREATE INDEX IF NOT EXISTS idx_tournaments_fecha ON tournaments(fecha_inicio);
CREATE INDEX IF NOT EXISTS idx_news_fecha ON news(fecha_publicacion);
CREATE INDEX IF NOT EXISTS idx_tier_list_formato ON tier_list_entries(formato);
CREATE INDEX IF NOT EXISTS idx_usage_formato_periodo ON usage_entries(formato, periodo);
