const solanaWeb3 = require('@solana/web3.js');
const fs = require('fs');

const TOTAL = 10; // Ganti jumlah sesuai kebutuhan

let addresses = '';
let privateKeys = '';

for (let i = 0; i < TOTAL; i++) {
  const keypair = solanaWeb3.Keypair.generate();

  const publicKey = keypair.publicKey.toBase58();
  const privateKey = JSON.stringify(Array.from(keypair.secretKey));

  addresses += publicKey + '\n';
  privateKeys += privateKey + '\n';

  console.log(`Generated ${i + 1}: ${publicKey}`);
}

// Simpan hasil ke file
fs.writeFileSync('address.txt', addresses.trim());
fs.writeFileSync('pk.txt', privateKeys.trim());

console.log(`\n✅ ${TOTAL} address saved to address.txt`);
console.log(`✅ ${TOTAL} private keys saved to pk.txt`);
