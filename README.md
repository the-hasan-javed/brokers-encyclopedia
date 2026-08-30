# brokers-encyclopedia

SVG brand icons for stock, crypto, and forex brokers.

[![npm](https://img.shields.io/npm/v/brokers-encyclopedia.svg)](https://www.npmjs.com/package/brokers-encyclopedia)
[![license](https://img.shields.io/npm/l/brokers-encyclopedia.svg)](./LICENSE)

```bash
npm install brokers-encyclopedia
```

100 icons as 128×128 SVGs with a transparent background. Look them up by slug (`robinhood`) or a common alias (`ibkr`, `mt4`, `schwab`).

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
| `5paisa` | 5paisa | `fivepaisa` |
| `acorns` | Acorns |  |
| `admirals` | Admirals | `admiral-markets` |
| `aj-bell` | AJ Bell | `ajbell` |
| `ally-invest` | Ally Invest | `ally` |
| `alpaca` | Alpaca |  |
| `angel-one` | Angel One | `angelone`, `angel-broking` |
| `avanza` | Avanza |  |
| `avatrade` | AvaTrade |  |
| `axi` | Axi | `axitrader` |
| `betterment` | Betterment |  |
| `binance` | Binance |  |
| `bitfinex` | Bitfinex |  |
| `bitget` | Bitget |  |
| `bitpanda` | Bitpanda |  |
| `bitstamp` | Bitstamp |  |
| `bux` | BUX |  |
| `bybit` | Bybit |  |
| `capital-com` | Capital.com | `capital_com`, `capital.com`, `capital` |
| `charles-schwab` | Charles Schwab | `schwab`, `charles_schwab` |
| `chase` | Chase | `jpmorgan-chase` |
| `cmc-markets` | CMC Markets | `cmc` |
| `coinbase` | Coinbase |  |
| `comdirect` | comdirect |  |
| `commsec` | CommSec |  |
| `crypto-com` | Crypto.com | `cryptocom`, `crypto.com` |
| `degiro` | DEGIRO |  |
| `deribit` | Deribit |  |
| `dukascopy` | Dukascopy |  |
| `eightcap` | Eightcap |  |
| `etoro` | eToro |  |
| `etrade` | E*TRADE | `e-trade`, `e_trade` |
| `exness` | Exness |  |
| `fbs` | FBS |  |
| `fidelity` | Fidelity |  |
| `fineco` | Fineco | `fineco-bank` |
| `firstrade` | Firstrade |  |
| `flatex` | flatex | `flatexdegiro` |
| `forex-com` | FOREX.com | `forex.com`, `forexcom` |
| `fp-markets` | FP Markets | `fpmarkets` |
| `freetrade` | Freetrade |  |
| `fxcm` | FXCM |  |
| `fxpro` | FxPro |  |
| `gate-io` | Gate.io | `gateio`, `gate` |
| `gemini` | Gemini |  |
| `groww` | Groww |  |
| `hargreaves-lansdown` | Hargreaves Lansdown | `hl` |
| `hdfc-securities` | HDFC Securities | `hdfc` |
| `hfm` | HFM | `hotforex` |
| `htx` | HTX | `huobi` |
| `ic-markets` | IC Markets | `icmarkets` |
| `icici-direct` | ICICI Direct | `icicidirect` |
| `ig` | IG | `ig-group`, `ig-markets` |
| `interactive-brokers` | Interactive Brokers | `ib`, `ibkr`, `interactive_brokers` |
| `interactive-investor` | interactive investor | `ii` |
| `kraken` | Kraken |  |
| `kucoin` | KuCoin |  |
| `lightyear` | Lightyear |  |
| `m1-finance` | M1 Finance | `m1` |
| `merrill-edge` | Merrill Edge | `merrill`, `merrill-lynch` |
| `metatrader-mt4` | MetaTrader 4 | `mt4`, `metatrader_mt4`, `metatrader4` |
| `metatrader-mt5` | MetaTrader 5 | `mt5`, `metatrader_mt5`, `metatrader5` |
| `mexc` | MEXC |  |
| `moomoo` | moomoo | `futu` |
| `ninjatrader` | NinjaTrader |  |
| `nordnet` | Nordnet |  |
| `oanda` | OANDA |  |
| `octafx` | Octa | `octa`, `octafx` |
| `okx` | OKX | `okex` |
| `paytm-money` | Paytm Money | `paytm` |
| `pepperstone` | Pepperstone |  |
| `plus500` | Plus500 |  |
| `public` | Public | `public-com` |
| `questrade` | Questrade |  |
| `rakuten` | Rakuten Securities | `rakuten-securities` |
| `revolut` | Revolut | `revolut-invest` |
| `robinhood` | Robinhood | `rh` |
| `saxo` | Saxo | `saxo-bank`, `saxobank` |
| `scalable-capital` | Scalable Capital | `scalable` |
| `sharesies` | Sharesies |  |
| `sofi` | SoFi | `sofi-invest` |
| `stake` | Stake |  |
| `swissquote` | Swissquote |  |
| `tastytrade` | tastytrade | `tastyworks` |
| `td-ameritrade` | TD Ameritrade | `td_ameritrade`, `thinkorswim`, `tos` |
| `td-direct-investing` | TD Direct Investing | `td-di`, `td-canada` |
| `tickmill` | Tickmill |  |
| `tiger-brokers` | Tiger Brokers | `tiger` |
| `trade-republic` | Trade Republic | `traderepublic` |
| `tradestation-paper` | TradeStation | `tradestation`, `tradestation_paper` |
| `tradier` | Tradier |  |
| `trading212` | Trading 212 | `trading-212`, `t212` |
| `upstox` | Upstox |  |
| `vanguard-us` | Vanguard | `vanguard`, `vanguard_us` |
| `wealthsimple-trade` | Wealthsimple | `wealthsimple`, `wealthsimple_trade` |
| `webull` | Webull |  |
| `wells-fargo` | Wells Fargo | `wells_fargo`, `wellsfargo` |
| `xm` | XM | `xm-group` |
| `xtb` | XTB |  |
| `zerodha` | Zerodha | `kite` |

## License

MIT. Broker names and logos are trademarks of their respective owners. This package is for identification only and does not imply endorsement.
