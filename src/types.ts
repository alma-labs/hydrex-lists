// Uniswap Token List Standard
export interface Token {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
}

export interface TokenList {
  name: string;
  logoURI: string;
  keywords: string[];
  version: {
    major: number;
    minor: number;
    patch: number;
  };
  tokens: Token[];
}
