const solanaWeb3 = require('@solana/web3.js');
const fs = require('fs');
const bs58 = require('bs58');

const TOTAL = 10;

let addresses = '';
let privateKeys = '';

for (let i = 0; i < TOTAL; i++) {
  const keypair = solanaWeb3.Keypair.generate();

  const publicKey = keypair.publicKey.toBase58();
  const privateKeyBase58 = bs58.encode(Buffer.from(keypair.secretKey));

  addresses += publicKey + '\n';
  privateKeys += privateKeyBase58 + '\n';

  console.log(`Generated ${i + 1}: ${publicKey}`);
}

fs.writeFileSync('address.txt', addresses.trim());
fs.writeFileSync('pk.txt', privateKeys.trim());

console.log(`\n✅ ${TOTAL} address saved to address.txt`);
console.log(`✅ ${TOTAL} base58 private keys saved to pk.txt`);
