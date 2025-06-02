export type LiquidityType = "uniV4" | "integral";
export type StrategyType = "Narrow" | "Correlated" | "Long-Short";
export type Strategist = "Ichi" | "Gamma";

export const ETH_NATIVE_ADDRESS = "0x0000000000000000000000000000000000000000";

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

export interface Badge {
  name: string;
  nftId: string;
  image: string;
  rewardImage: string;
  description: string;
  type: "Airdrop" | "Tier" | "Activity" | "Partner";
  metric?: string;
  partnerName?: string;
  minHydropoints: number;
  poolSize?: number;
}

export interface Strategy {
  chainId: number;
  title: string;
  type: StrategyType;
  liquidityType: LiquidityType;
  strategist: Strategist;
  address: string;
  depositToken?: string;
  token0Address?: string;
  token1Address?: string;
  v4PoolId?: string;
}
