import { ChainId, Currency } from "@taraswap/sdk-core";
import { constants } from "ethers";

export enum NativeAssets {
  TESTNET_TARAXA = "TARA",
  TARAXA = "TARA",
}

function nativeCurrencyAddressString(chainId: number): string {
  switch (chainId) {
    case ChainId.TARAXA_TESTNET:
      return NativeAssets.TESTNET_TARAXA;
    default:
      return NativeAssets.TARAXA;
  }
}

export function areCurrenciesEqual(
  currency: Currency,
  address: string | null,
  chainId: number
) {
  if (currency.chainId !== chainId) return false;

  if (currency.isNative) {
    return (
      address === constants.AddressZero ||
      address === nativeCurrencyAddressString(chainId)
    );
  }

  return currency.address.toLowerCase() === address?.toLowerCase();
}
