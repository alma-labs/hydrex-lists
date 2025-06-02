import { Token } from "../types";

export const WETH: Token = {
  chainId: 84532,
  address: "0x4200000000000000000000000000000000000006",
  name: "Wrapped Ether",
  symbol: "WETH",
  decimals: 18,
  logoURI:
    "https://raw.githubusercontent.com/alma-labs/hydrex-lists/main/assets/tokens/WETH.png",
};

export const USDC: Token = {
  chainId: 84532,
  address: "0x26336351DB798dd9BEA02ec1a4B2C81fDa0BD894",
  name: "USD Coin",
  symbol: "USDC",
  decimals: 6,
  logoURI:
    "https://raw.githubusercontent.com/alma-labs/hydrex-lists/main/assets/tokens/USDC.png",
};

export const cbBTC: Token = {
  chainId: 84532,
  address: "0x2b7a959451C7b2C3029966a6526aab939fe9E863",
  name: "Coinbase BTC",
  symbol: "cbBTC",
  decimals: 18,
  logoURI:
    "https://raw.githubusercontent.com/alma-labs/hydrex-lists/main/assets/tokens/CBBTC.png",
};

export const tokens: Token[] = [WETH, USDC, cbBTC];
