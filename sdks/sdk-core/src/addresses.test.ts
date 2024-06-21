import { SWAP_ROUTER_02_ADDRESSES } from './addresses'
import { ChainId } from './chains'

describe('addresses', () => {
  describe('swap router 02 addresses', () => {
    it('should return the correct address for base', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.TARAXA)
      expect(address).toEqual('0xC5C0A2C28C000788Fcf41ACa8Dc8B5fd4c1838C8') //todo: change address after deployment
    })

    it('should return the correct address for base goerli', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.TARAXA_TESTNET)
      expect(address).toEqual('0xC5C0A2C28C000788Fcf41ACa8Dc8B5fd4c1838C8')
    })
  })
})
