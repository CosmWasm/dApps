import { CosmWasmFeeTable, SigningCosmWasmClient } from "@cosmjs/cosmwasm";
import { Bip39, Random } from "@cosmjs/crypto";
import {
  GasLimits,
  GasPrice,
  LcdClient,
  makeCosmoshubPath,
  OfflineSigner,
  Secp256k1HdWallet,
  setupStakingExtension,
  StakingExtension,
} from "@cosmjs/launchpad";
import { LedgerSigner } from "@cosmjs/launchpad-ledger";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import { AppConfig } from "../config";

// generateMnemonic will give you a fresh mnemonic
// it is up to the app to store this somewhere
export function generateMnemonic(): string {
  return Bip39.encode(Random.getBytes(16)).toString();
}

// some code that will only work in a browser...
export function loadOrCreateMnemonic(): string {
  const key = "burner-wallet";
  const loaded = localStorage.getItem(key);
  if (loaded) {
    return loaded;
  }
  const generated = generateMnemonic();
  localStorage.setItem(key, generated);
  return generated;
}

export type WalletLoader = (chainId: string, addressPrefix?: string) => Promise<OfflineSigner>;

export async function loadOrCreateWallet(_chainId: string, addressPrefix?: string): Promise<OfflineSigner> {
  const mnemonic = loadOrCreateMnemonic();
  const hdPath = makeCosmoshubPath(0);
  const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, hdPath, addressPrefix);
  return wallet;
}

export async function loadLedgerWallet(_chainId: string, addressPrefix?: string): Promise<OfflineSigner> {
  const interactiveTimeout = 120_000;
  const ledgerTransport = await TransportWebUSB.create(interactiveTimeout, interactiveTimeout);

  return new LedgerSigner(ledgerTransport, { hdPaths: [makeCosmoshubPath(0)], prefix: addressPrefix });
}

export async function loadKeplrWallet(chainId: string): Promise<OfflineSigner> {
  const anyWindow: any = window;
  if (!anyWindow.getOfflineSigner) {
    throw new Error("Keplr extension is not available");
  }
  return anyWindow.getOfflineSigner(chainId);
}

// this creates a new connection to a server at URL,
// using a signing keyring generated from the given mnemonic
export async function createClient(config: AppConfig, signer: OfflineSigner): Promise<SigningCosmWasmClient> {
  const firstAddress = (await signer.getAccounts())[0].address;
  const gasPrice = GasPrice.fromString(`${config.gasPrice}${config.feeToken}`);
  const gasLimits: GasLimits<CosmWasmFeeTable> = {
    upload: 1500000,
    init: 600000,
    exec: 400000,
    migrate: 600000,
    send: 80000,
    changeAdmin: 80000,
  };

  return new SigningCosmWasmClient(config.httpUrl, firstAddress, signer, gasPrice, gasLimits);
}

export function createStakingClient(apiUrl: string): LcdClient & StakingExtension {
  return LcdClient.withExtensions({ apiUrl }, setupStakingExtension);
}
