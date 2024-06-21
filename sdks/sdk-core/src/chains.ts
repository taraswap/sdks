export enum ChainId {
  TARAXA = 841,
  TARAXA_TESTNET = 842,
}

export const SUPPORTED_CHAINS = [
  ChainId.TARAXA,
  ChainId.TARAXA_TESTNET,
] as const
export type SupportedChainsType = (typeof SUPPORTED_CHAINS)[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  TARAXA = 'TARA',
  TARAXA_TESTNET = 'Testnet TARA',
}
