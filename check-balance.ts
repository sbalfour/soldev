import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// eg. npx esrun check-balance.ts HtzJJss2ab1bdYY47DhkpxdYDGDPxxUw3gyhj7T43KjF
const suppliedPublicKey = process.argv[2];

if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

let publicKey;
try {
    publicKey = new PublicKey(suppliedPublicKey);
} catch {
    throw new Error("Public key is not a valid address!");
}

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);