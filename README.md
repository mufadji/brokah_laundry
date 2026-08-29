# Landing Page - Barokah Laundry

Repositori ini berisi kode sumber landing page satu halaman (single-page website) yang dirancang khusus untuk **Barokah Laundry**. Website ini dibangun menggunakan teknologi web dasar (HTML5, CSS3, dan Vanilla JavaScript) tanpa framework berat, sehingga sangat ringan, responsif, ramah seluler (mobile-friendly), dan mudah dimodifikasi sesuai kebutuhan.

---

## 📂 Struktur Folder Proyek
```text
brokah_laundry/
│
├── index.html          # Struktur halaman & konten utama (HTML5)
├── styles.css          # Desain visual, tata letak responsif, & animasi (CSS3)
├── script.js           # Logika interaktif: FAQ accordion, sticky header, & mobile menu (JS)
├── README.md           # Panduan penggunaan dan kustomisasi (File ini)
└── assets/             # (Disarankan) Folder untuk menyimpan foto asli Anda (.jpg / .png)
```

---

## 🚀 Cara Menjalankan Website Secara Lokal

Untuk membuka dan melihat website di komputer Anda atau memperlihatkannya ke klien, gunakan salah satu cara berikut:

### Cara 1: Buka Langsung (Paling Mudah)
1. Buka folder proyek `brokah_laundry`.
2. Klik dua kali pada file `index.html` (atau klik kanan -> *Open with* -> pilih Chrome, Edge, Firefox, atau browser favorit Anda).

### Cara 2: Menggunakan Local Web Server (Direkomendasikan)
Menjalankan lewat server lokal memastikan semua fitur (seperti iframe peta dan transisi) dimuat dengan sempurna tanpa batasan protokol keamanan browser.
- **Menggunakan VS Code:** Instal ekstensi **Live Server**, lalu buka folder ini di VS Code dan klik tombol **Go Live** di pojok kanan bawah.
- **Menggunakan Python (Terminah/CMD):**
  Buka CMD/Terminal di folder ini dan jalankan perintah:
  ```bash
  python -m http.server 8000
  ```
  Kemudian buka browser dan akses `http://localhost:8000`.

---

## ✍️ Panduan Kustomisasi (Cara Mengubah Konten Mockup)

Anda bisa mengubah mockup ini dengan aset asli Barokah Laundry secara mandiri dengan mengedit file kode menggunakan teks editor (seperti Notepad, VS Code, atau Sublime Text). Berikut adalah bagian-bagian penting yang perlu disesuaikan:

### 1. Mengubah Nomor WhatsApp (Chat-to-Click)
Cari tautan WhatsApp di dalam file [index.html](file:///d:/website%20makeing%20asmr/brokah_laundry/index.html). Tautan ini menggunakan format `https://wa.me/62xxxxxxxxxxx?text=...`.
- Ubah angka `6281234567890` dengan nomor WhatsApp bisnis klien Anda (pastikan dimulai dengan kode negara tanpa tanda `+`, contoh `6281299998888` untuk nomor `0812-9999-8888`).
- Ubah teks setelah `text=` untuk menyesuaikan pesan pembuka otomatis dari pelanggan. Gunakan `%20` untuk spasi dan `%2C` untuk tanda koma.

*Lokasi tombol WhatsApp di HTML:*
- Tombol WhatsApp melayang (floating button) di baris ke-13
- Link WhatsApp di header navigasi di baris ke-38
- Link WhatsApp di bagian tombol utama Hero di baris ke-70
- Tombol daftar Paket Harga Bulanan di baris ke-214, 237, dan 257
- Nomor kontak di bagian Footer di baris ke-444

---

### 2. Mengubah Foto Placeholder ke Foto Asli
Saat ini semua gambar menggunakan placeholder dari layanan pihak ketiga `https://placehold.co/`.
Untuk menggantinya dengan foto laundry asli milik klien:
1. Buat folder baru bernama `assets` di dalam folder proyek Anda.
2. Simpan foto-foto asli di dalam folder `assets/` tersebut dengan nama yang jelas (misal: `hero-laundry.jpg`, `cuci-kiloan.jpg`, `sepatu.jpg`).
3. Buka [index.html](file:///d:/website%20makeing%20asmr/brokah_laundry/index.html) dan cari tag gambar `<img>` yang ingin diubah.
4. Ganti bagian `src="..."` ke lokasi file gambar lokal baru Anda.
   *Contoh:*
   ```diff
   - <img src="https://placehold.co/600x600/1e5fcc/ffffff?text=Barokah+Laundry" alt="..." class="hero-img">
   + <img src="assets/hero-laundry.jpg" alt="Layanan laundry profesional Barokah Laundry" class="hero-img">
   ```
   *Catatan:* Tiap bagian gambar yang menggunakan placeholder sudah ditandai dengan komentar `<!-- ganti dengan foto asli -->` tepat di atasnya untuk memudahkan pencarian.

---

### 3. Mengubah Lokasi Google Maps
Untuk mengganti peta koordinat dummy Malang dengan lokasi outlet laundry klien Anda:
1. Buka [Google Maps](https://maps.google.com) di browser Anda.
2. Cari nama toko atau alamat laundry klien Anda.
3. Klik tombol **Bagikan (Share)** -> pilih tab **Sematkan peta (Embed a map)**.
4. Salin kode HTML iframe yang disediakan (klik *Salin HTML / Copy HTML*).
5. Buka [index.html](file:///d:/website%20makeing%20asmr/brokah_laundry/index.html), cari tag `<iframe>` di sekitar baris ke-386 (di dalam `<div class="maps-embed-wrapper">`).
6. Hapus tag `<iframe>` lama dan tempelkan (*paste*) kode iframe baru dari Google Maps.
7. Pastikan atribut `width` diatur ke `"100%"` dan `height` ke `"450"` (atau sesuaikan tinggi peta yang Anda inginkan) serta tambahkan class `class="maps-iframe"`.

---

### 4. Mengubah Layanan & Harga
Semua daftar layanan, harga, dan paket berlangganan ada di dalam section **Layanan & Harga** di [index.html](file:///d:/website%20makeing%20asmr/brokah_laundry/index.html) (baris ke-119 hingga 265).
- Cari teks nama layanan (seperti `Cuci Setrika Kiloan` atau `Rp 10.000 / kg`) untuk mengubah tarif harganya.
- Jika ada layanan baru yang ingin ditambahkan, Anda cukup menduplikasi elemen div dengan class `.service-card` yang ada di dalam grid.

---

### 5. Mengubah Skema Warna Website
Website ini menggunakan warna dasar Biru, Kuning, dan Putih. Warna-warna ini dikendalikan dari satu tempat menggunakan variabel CSS di file [styles.css](file:///d:/website%20makeing%20asmr/brokah_laundry/styles.css).
Buka file `styles.css` dan cari bagian `:root` di bagian paling atas:
```css
:root {
  /* Color Palette */
  --color-primary: #1E5FCC;        /* Warna Biru Utama website */
  --color-primary-dark: #154699;   /* Warna Biru Tua (saat tombol di-hover) */
  --color-primary-light: #EBF2FE;  /* Warna Biru Muda untuk background kartu */
  --color-accent: #F5B900;         /* Warna Kuning Aksen (highlight/tombol popular) */
  --color-accent-hover: #D9A400;   /* Warna Kuning Tua (saat tombol kuning di-hover) */
  ...
}
```
Cukup ganti kode warna HEX di atas (misal `#1E5FCC`) dengan kode warna brand laundry klien Anda yang baru. Seluruh halaman website akan otomatis berubah mengikuti warna baru tersebut.

---

## 🛡️ Hak Cipta & Lisensi
Website ini bersifat open-source dan bebas dimodifikasi oleh Anda untuk keperluan portofolio, komersial, maupun diserahkan kepada klien akhir secara penuh. 
