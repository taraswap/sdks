import { BigNumber } from '@ethersproject/bignumber'

// @deprecated please use permit2Address(chainId: number)
export const PERMIT2_ADDRESS = '0xe7a62cda3b34a90a6fcc927e36692bf4c9481be1'

export function permit2Address(chainId?: number): string {
  switch (chainId) {
    case 841:
      return '0xe7a62cda3b34a90a6fcc927e36692bf4c9481be1'
    case 324:
      return '0x0000000000225e31D15943971F47aD3022F714Fa'
    case 842:
      return '0x7307E61D8d33da0123D516e6431241a9842453C9'
    default:
      return PERMIT2_ADDRESS
  }
}

export const MaxUint48 = BigNumber.from('0xffffffffffff')
export const MaxUint160 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffff')
export const MaxUint256 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

// alias max types for their usages
// allowance transfer types
export const MaxAllowanceTransferAmount = MaxUint160
export const MaxAllowanceExpiration = MaxUint48
export const MaxOrderedNonce = MaxUint48

// signature transfer types
export const MaxSignatureTransferAmount = MaxUint256
export const MaxUnorderedNonce = MaxUint256
export const MaxSigDeadline = MaxUint256

export const InstantExpiration: BigNumber = BigNumber.from(0)
