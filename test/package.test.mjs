import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import { brokers, getBroker, getIconSvg, listBrokers } from "../index.js";

const root = fileURLToPath(new URL("..", import.meta.url));

describe("brokers-encyclopedia", () => {
  it("exports a non-empty catalog", () => {
    assert.ok(brokers.length >= 30);
  });

  it("ships an SVG file for every slug", () => {
    for (const broker of brokers) {
      assert.ok(existsSync(join(root, broker.file)), broker.file);
      assert.match(broker.svg, /<svg[\s>]/);
      assert.match(broker.svg, /<\/svg>/);
    }
  });

  it("resolves slugs and aliases", () => {
    assert.equal(getBroker("interactive-brokers")?.name, "Interactive Brokers");
    assert.equal(getBroker("ibkr")?.slug, "interactive-brokers");
    assert.equal(getBroker("interactive_brokers")?.slug, "interactive-brokers");
    assert.equal(getBroker("Charles Schwab")?.slug, "charles-schwab");
    assert.equal(getBroker("mt4")?.slug, "metatrader-mt4");
    assert.equal(getBroker("missing-broker"), undefined);
  });

  it("returns svg markup", () => {
    const svg = getIconSvg("robinhood");
    assert.ok(svg.includes("<svg"));
    assert.ok(svg.includes("</svg>"));
  });

  it("lists brokers without svg payloads", () => {
    const list = listBrokers();
    assert.equal(list.length, brokers.length);
    assert.equal(list[0].svg, undefined);
    assert.ok(list[0].slug);
    assert.ok(list[0].file.startsWith("icons/"));
  });
});
