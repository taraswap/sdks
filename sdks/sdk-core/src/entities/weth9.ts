import { Token } from './token'

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  841: new Token(841, '0x5745CC77c362D459b78bC014d8940c2c98E08c54', 18, 'WTARA', 'Wrapped TARA'), //todo: add actual address
  842: new Token(842, '0x5745CC77c362D459b78bC014d8940c2c98E08c54', 18, 'WTARA', 'Wrapped Testnet TARA'),
  1: new Token(1, '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', 18, 'WETH', 'Wrapped Ether'),
}
