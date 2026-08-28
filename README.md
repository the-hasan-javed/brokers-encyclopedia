# brokers-encyclopedia

SVG brand icons for stock, crypto, and forex brokers.

[![npm](https://img.shields.io/npm/v/brokers-encyclopedia.svg)](https://www.npmjs.com/package/brokers-encyclopedia)
[![license](https://img.shields.io/npm/l/brokers-encyclopedia.svg)](./LICENSE)

```bash
npm install brokers-encyclopedia
```

Icons are 128×128 SVGs with a transparent background. Look them up by slug (`robinhood`) or a common alias (`ibkr`, `mt4`, `schwab`).

## Usage

### JavaScript / TypeScript

```js
import { brokers, getBroker, getIconSvg, listBrokers } from "brokers-encyclopedia";

const ib = getBroker("ibkr");
// {
//   slug: "interactive-brokers",
//   name: "Interactive Brokers",
//   aliases: ["ib", "ibkr", "interactive_brokers"],
//   file: "icons/interactive-brokers.svg",
//   svg: "<svg ...>"
// }

getIconSvg("robinhood"); // SVG markup
listBrokers();           // names and slugs only
```

Underscores, spaces, and aliases resolve to the same icon:

```js
getBroker("interactive_brokers");
getBroker("Charles Schwab");
getBroker("mt4");
```

Unknown ids return `undefined`.

### SVG files

```js
import robinhood from "brokers-encyclopedia/icons/robinhood.svg";
```

```html
<img
  src="./node_modules/brokers-encyclopedia/icons/coinbase.svg"
  alt="Coinbase"
  width="32"
  height="32"
/>
```

### React

```jsx
function BrokerIcon({ id, ...props }) {
  const broker = getBroker(id);
  if (!broker) return null;
  return (
    <span
      role="img"
      aria-label={broker.name}
      dangerouslySetInnerHTML={{ __html: broker.svg }}
      {...props}
    />
  );
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

## License

MIT. Broker names and logos are trademarks of their respective owners. This package is for identification only and does not imply endorsement.
