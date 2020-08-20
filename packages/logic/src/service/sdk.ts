import { SigningCosmWasmClient } from "@cosmjs/cosmwasm";
import { Bip39, Random } from "@cosmjs/crypto";
import { makeCosmoshubPath, OfflineSigner, Secp256k1Wallet } from "@cosmjs/launchpad";
import { AppConfig } from "../config";
import { buildFeeTable } from "../utils/currency";

// generateMnemonic will give you a fresh mnemonic
// it is up to the app to store this somewhere
function generateMnemonic(): string {
  return Bip39.encode(Random.getBytes(16)).toString();
}

// some code that will only work in a browser...
function loadOrCreateMnemonic(): string {
  const key = "burner-wallet";
  const loaded = localStorage.getItem(key);
  if (loaded) {
    return loaded;
  }
  const generated = generateMnemonic();
  localStorage.setItem(key, generated);
  return generated;
}

async function loadOrCreateWallet(addressPrefix: string): Promise<OfflineSigner> {
  const mnemonic = loadOrCreateMnemonic();
  const hdPath = makeCosmoshubPath(0);
  const wallet = await Secp256k1Wallet.fromMnemonic(mnemonic, hdPath, addressPrefix);
  return wallet;
}

// this creates a new connection to a server at URL,
// using a signing keyring generated from the given mnemonic
async function createClient(config: AppConfig, signer: OfflineSigner): Promise<SigningCosmWasmClient> {
  const firstAddress = (await signer.getAccounts())[0].address;
  const feeTable = buildFeeTable(config);
  return new SigningCosmWasmClient(config.httpUrl, firstAddress, signer, feeTable);
}

export { generateMnemonic, loadOrCreateMnemonic, loadOrCreateWallet, createClient };
