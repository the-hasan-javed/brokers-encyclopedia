# brokers-encyclopedia

SVG brand icons for stock, crypto, and forex brokers.

```bash
npm install brokers-encyclopedia
```

## Usage

### JavaScript / TypeScript

```js
import { brokers, getBroker, getIconSvg, listBrokers } from "brokers-encyclopedia";

getBroker("ibkr");
// {
//   slug: "interactive-brokers",
//   name: "Interactive Brokers",
//   aliases: ["ib", "ibkr", "interactive_brokers"],
//   file: "icons/interactive-brokers.svg",
//   svg: "<svg ...>"
// }

getIconSvg("robinhood");
listBrokers(); // metadata only, no SVG payloads
brokers.length;
```

Slugs are kebab-case. Underscores, spaces, and aliases also resolve:

```js
getBroker("interactive_brokers");
getBroker("Charles Schwab");
getBroker("mt4");
```

### SVG files

```js
import robinhood from "brokers-encyclopedia/icons/robinhood.svg";
```

```html
<img src="./node_modules/brokers-encyclopedia/icons/coinbase.svg" alt="Coinbase" />
```

### React

```jsx
function BrokerIcon({ id, ...props }) {
  const broker = getBroker(id);
  if (!broker) return null;
  return <span role="img" aria-label={broker.name} dangerouslySetInnerHTML={{ __html: broker.svg }} {...props} />;
}
```

## Icons

| Slug | Name | Aliases |
| --- | --- | --- |
| `alpaca` | Alpaca | |
| `binance` | Binance | |
| `bitget` | Bitget | |
| `bux` | BUX | |
| `bybit` | Bybit | |
| `capital-com` | Capital.com | `capital_com`, `capital.com`, `capital` |
| `charles-schwab` | Charles Schwab | `schwab`, `charles_schwab` |
| `chase` | Chase | `jpmorgan-chase` |
| `coinbase` | Coinbase | |
| `degiro` | DEGIRO | |
| `etrade` | E\*TRADE | `e-trade`, `e_trade` |
| `fidelity` | Fidelity | |
| `interactive-brokers` | Interactive Brokers | `ib`, `ibkr`, `interactive_brokers` |
| `kraken` | Kraken | |
| `metatrader-mt4` | MetaTrader 4 | `mt4`, `metatrader_mt4`, `metatrader4` |
| `metatrader-mt5` | MetaTrader 5 | `mt5`, `metatrader_mt5`, `metatrader5` |
| `moomoo` | moomoo | |
| `oanda` | OANDA | |
| `questrade` | Questrade | |
| `robinhood` | Robinhood | `rh` |
| `tastytrade` | tastytrade | `tastyworks` |
| `td-ameritrade` | TD Ameritrade | `td_ameritrade`, `thinkorswim`, `tos` |
| `tradestation-paper` | TradeStation | `tradestation`, `tradestation_paper` |
| `tradier` | Tradier | |
| `trading212` | Trading 212 | `trading-212`, `t212` |
| `upstox` | Upstox | |
| `vanguard-us` | Vanguard | `vanguard`, `vanguard_us` |
| `wealthsimple-trade` | Wealthsimple | `wealthsimple`, `wealthsimple_trade` |
| `webull` | Webull | |
| `wells-fargo` | Wells Fargo | `wells_fargo`, `wellsfargo` |
| `zerodha` | Zerodha | `kite` |

## Publish

Every push to `main` runs `.github/workflows/release.yml`: tests, bumps the patch version when that version is already on npm, creates a GitHub Release, and publishes to npm.

Add a repository secret named `NPM_TOKEN` (npm Access Token with publish rights). GitHub’s `GITHUB_TOKEN` is enough for tags and releases.

```bash
# optional local publish
npm test
npm publish --access public
```

## License

MIT. Broker names and logos are trademarks of their respective owners. This package is for identification only and does not imply endorsement.
