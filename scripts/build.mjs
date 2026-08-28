#!/usr/bin/env node
/**
 * Regenerates index.js and index.d.ts from brokers.json + icons/*.svg
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(readFileSync(join(root, "brokers.json"), "utf8"));

function jsString(value) {
  return JSON.stringify(value);
}

const brokers = catalog.map((entry) => {
  const file = join(root, "icons", `${entry.slug}.svg`);
  const svg = readFileSync(file, "utf8").trim() + "\n";
  return { ...entry, file: `icons/${entry.slug}.svg`, svg };
});

const indexJs = `/**
 * Broker brand icons as inline SVG + file paths.
 * @module brokers-encyclopedia
 */
export const brokers = ${JSON.stringify(brokers, null, 2)};

const lookup = new Map();
for (const broker of brokers) {
  lookup.set(broker.slug, broker);
  for (const alias of broker.aliases) {
    lookup.set(alias, broker);
  }
}

function normalizeId(id) {
  return String(id)
    .trim()
    .toLowerCase()
    .replace(/[*]+/g, "")
    .replace(/[\\s_]+/g, "-");
}

/**
 * Resolve a broker by slug or alias (case-insensitive; \`_\` and spaces accepted).
 * @param {string} id
 * @returns {typeof brokers[number] | undefined}
 */
export function getBroker(id) {
  if (id == null) return undefined;
  const raw = String(id).trim();
  return lookup.get(raw) || lookup.get(raw.toLowerCase()) || lookup.get(normalizeId(raw));
}

/**
 * SVG markup for a broker, or undefined if unknown.
 * @param {string} id
 * @returns {string | undefined}
 */
export function getIconSvg(id) {
  return getBroker(id)?.svg;
}

/**
 * Catalog without inline SVG payloads.
 * @returns {Array<{ slug: string, name: string, aliases: string[], file: string }>}
 */
export function listBrokers() {
  return brokers.map(({ svg, ...meta }) => meta);
}

export default brokers;
`;

const indexDts = `export interface BrokerIcon {
  /** Canonical kebab-case id, e.g. \`"interactive-brokers"\`. */
  slug: string;
  /** Display name. */
  name: string;
  /** Alternate ids accepted by {@link getBroker}. */
  aliases: string[];
  /** Package-relative path to the SVG file. */
  file: string;
  /** Full SVG document. */
  svg: string;
}

export const brokers: BrokerIcon[];

export function getBroker(id: string): BrokerIcon | undefined;
export function getIconSvg(id: string): string | undefined;
export function listBrokers(): Array<Omit<BrokerIcon, "svg">>;

declare const brokersDefault: BrokerIcon[];
export default brokersDefault;
`;

writeFileSync(join(root, "index.js"), indexJs);
writeFileSync(join(root, "index.d.ts"), indexDts);
console.log(`built ${brokers.length} brokers → index.js, index.d.ts`);
