import { Ether } from './ether'

describe('Ether', () => {
  it('static constructor uses cache', () => {
    // eslint-disable-next-line no-self-compare
    expect(Ether.onChain(841) === Ether.onChain(841)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(Ether.onChain(841) !== Ether.onChain(842)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(Ether.onChain(841).equals(Ether.onChain(842))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(Ether.onChain(841).equals(Ether.onChain(841))).toEqual(true)
  })
})
