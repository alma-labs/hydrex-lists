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
