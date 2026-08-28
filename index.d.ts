export interface BrokerIcon {
  /** Canonical kebab-case id, e.g. `"interactive-brokers"`. */
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
