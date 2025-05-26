import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve } from "path";
import { baseTokens, baseSepoliaTokens } from "./tokens";
import { Token, TokenList } from "./types";

const outputDir = resolve(__dirname, "../tokens");

function ensureDirectoryExists(dir: string) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function writeJsonFile(filename: string, jsonData: any) {
  if (!jsonData) {
    console.error(`❌ No data found for ${filename}`);
    return;
  }

  const outputPath = resolve(outputDir, `${filename}.json`);
  writeFileSync(outputPath, JSON.stringify(jsonData, null, 2), "utf-8");
  console.log(`✅ JSON file created: ${outputPath}`);
}

function checkForDuplicateTokens(tokens: Token[]) {
  const tokenKeys = new Set<string>();
  const duplicates: string[] = [];

  tokens.forEach((token) => {
    const key = `${token.chainId}-${token.address}`;
    if (tokenKeys.has(key)) {
      duplicates.push(key);
    } else {
      tokenKeys.add(key);
    }
  });

  if (duplicates.length > 0) {
    throw new Error(`Duplicate tokens found: ${duplicates.join(", ")}`);
  }
}

const tokenList: TokenList = {
  name: "Hydrex Token List",
  logoURI:
    "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/TOKIEMON.png",
  keywords: ["tokiemon", "base", "meme"],
  version: {
    major: 1,
    minor: 0,
    patch: 0,
  },
  tokens: [...baseTokens, ...baseSepoliaTokens],
};

ensureDirectoryExists(outputDir);

try {
  checkForDuplicateTokens(baseTokens);
  checkForDuplicateTokens(baseSepoliaTokens);
  writeJsonFile("main", tokenList);
  writeJsonFile("8453", baseTokens);
  writeJsonFile("84532", baseSepoliaTokens);
} catch (error: any) {
  console.error(`❌ Error processing tokens: ${error.message}`);
  process.exit(1);
}
