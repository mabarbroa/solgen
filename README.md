# solgen

# 🔐 Solana Private Key Generator

Script sederhana untuk membuat banyak pasangan **public address** dan **private key** Solana, lalu menyimpannya ke file teks:

- ✅ `address.txt` – berisi public address (Base58)
- ✅ `pk.txt` – berisi private key (Base58)

---

## 📦 Instalasi

1. Clone / download project
2. Jalankan di terminal:

```bash
npm install
Ini akan menginstal semua dependensi seperti @solana/web3.js dan base-58.

🚀 Cara Menjalankan
bash
Copy
Edit
node main.js
Secara default akan membuat 10 address. Kamu bisa ubah jumlahnya di file main.js:

js
Copy
Edit
const TOTAL = 10; // Ganti sesuai kebutuhan
📁 Output
Setelah dijalankan:

address.txt – berisi public address, satu per baris.

pk.txt – berisi private key (base58), satu per baris.

Contoh address.txt:

python-repl
Copy
Edit
5w3Zas...Avd
7gFdqK...pQy
...
Contoh pk.txt:

python-repl
Copy
Edit
5tS1T8GqzBLbRE4z7bN3tZLm9wdwRZqsGV2z2TkHkEK7LDsPQYzZZzEYyjkxU
3nAVa7HyMeYQxFtS6u6MXExfpwBQgB3Q81cct5MM3Pf3s1vpyAKqkxBLmWxQb
...
🧱 Dependensi
@solana/web3.js – untuk membuat keypair

base-58 – untuk konversi private key ke Base58

⚠️ Keamanan
JANGAN bagikan private key ke siapa pun.

Gunakan hanya di komputer aman.

Tidak disarankan untuk penggunaan mainnet secara langsung tanpa perlindungan tambahan.

✅ Lisensi
MIT License – bebas digunakan, dimodifikasi, dan dikembangkan.

yaml
Copy
Edit

---

Jika kamu ingin saya buatkan sekaligus file `package.json` dan struktur direktori standar (seperti `src/`, `output/`, dll), tinggal bilang saja.








Ask ChatGPT
