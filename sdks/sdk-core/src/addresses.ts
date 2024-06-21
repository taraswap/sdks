import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  mixedRouteQuoterV1Address?: string
}

const TARAXA_ADDRESSES: ChainAddresses = { //todo: replace after deployment
  v3CoreFactoryAddress: '0x9ad1044499a38B373BC8F29643612967bac9e901',
  multicallAddress: '0x98edEa58C0500287B973348ec315f3d26D0e189A',
  quoterAddress: '0x4698ecaCAD74c789531Df4b8983a9E6E7941319C',
  v3MigratorAddress: '0xe2022Fb10F91014D0087BEdDA9d279b3Db57d173',
  nonfungiblePositionManagerAddress: '0x539A493AE96A1846Aa7626361d819646d048ab16',
  tickLensAddress: '0xa57e3E31d5b66f62Ed654Bdd709B9903D88226de',
  swapRouter02Address: '0xC5C0A2C28C000788Fcf41ACa8Dc8B5fd4c1838C8',
}

const TARAXA_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x9ad1044499a38B373BC8F29643612967bac9e901',
  multicallAddress: '0x98edEa58C0500287B973348ec315f3d26D0e189A',
  quoterAddress: '0x4698ecaCAD74c789531Df4b8983a9E6E7941319C',
  v3MigratorAddress: '0xe2022Fb10F91014D0087BEdDA9d279b3Db57d173',
  nonfungiblePositionManagerAddress: '0x539A493AE96A1846Aa7626361d819646d048ab16',
  tickLensAddress: '0xa57e3E31d5b66f62Ed654Bdd709B9903D88226de',
  swapRouter02Address: '0xC5C0A2C28C000788Fcf41ACa8Dc8B5fd4c1838C8',
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.TARAXA]: TARAXA_ADDRESSES,
  [ChainId.TARAXA_TESTNET]: TARAXA_TESTNET_ADDRESSES,
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    return memo
  }, {}),
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {}),
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {}),
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {}),
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {}),
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {}),
}

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const mixedRouteQuoterV1Address = CHAIN_TO_ADDRESSES_MAP[chainId].mixedRouteQuoterV1Address
  if (mixedRouteQuoterV1Address) {
    memo[chainId] = mixedRouteQuoterV1Address
  }
  return memo
}, {})

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (SUPPORTED_CHAINS.includes(chainId)) {
    const id = chainId as SupportedChainsType
    return CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address ?? '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'
  }
  return ''
}
