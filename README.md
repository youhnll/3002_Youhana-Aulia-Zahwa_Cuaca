# 🌤️ Weather App UI

Aplikasi web sederhana untuk menampilkan informasi cuaca (suhu, kelembapan, kecepatan angin, indeks UV, dan prakiraan 5 hari ke depan) berdasarkan kota yang dipilih atau dicari pengguna. Dibangun dengan HTML, CSS, dan JavaScript murni (vanilla), tanpa framework tambahan. Tampilan menggunakan tema gelap (dark mode) dengan aksen warna kuning pada kota yang sedang aktif dipilih.

🔗 **Live Demo:** [Tambahkan link GitHub Pages kamu di sini setelah deploy]
_Contoh format: `https://username.github.io/nama-repo/`_

## 📸 Screenshot

![Screenshot Weather App](screenshot.png)

Tampilan di atas menunjukkan kondisi cuaca kota **Jakarta**: suhu 31°C dengan deskripsi "Cerah berawan", kelembapan 68%, kecepatan angin 12 km/jam, dan indeks UV 6. Di bagian bawah ditampilkan prakiraan cuaca untuk 5 hari ke depan (Senin–Jumat) lengkap dengan ikon kondisi cuaca serta suhu maksimum/minimum tiap hari. Pengguna juga dapat berpindah kota lewat tombol cepat (Jakarta, Bandung, Surabaya, Jember) atau mengetik nama kota lain pada kolom pencarian di bagian atas.

## ✨ Fitur

- Pencarian cuaca berdasarkan nama kota (tekan Enter)
- Tombol cepat untuk kota populer: Jakarta, Bandung, Surabaya, Jember
- Informasi utama: nama kota, suhu, dan deskripsi cuaca
- Statistik tambahan: kelembapan, kecepatan angin, indeks UV
- Prakiraan cuaca 5 hari ke depan
- Notifikasi jika kota tidak ditemukan
- Desain responsif dan modern menggunakan Google Fonts (Space Grotesk & Inter)

## 🛠️ Teknologi yang Digunakan

- **HTML5** — struktur halaman
- **CSS3** — styling dan layout (`style.css`)
- **JavaScript (Vanilla)** — logika interaktif (`script.js`)
- **Google Fonts** — Space Grotesk & Inter

## 📁 Struktur Folder

```
weather-app-ui/
├── index.html
├── style.css
├── script.js
├── screenshot.png
└── README.md
```

## 🚀 Cara Menjalankan Secara Lokal

1. Clone repository ini:
   ```bash
   git clone https://github.com/username/nama-repo.git
   ```
2. Masuk ke folder project:
   ```bash
   cd nama-repo
   ```
3. Buka file `index.html` langsung di browser, atau gunakan Live Server (ekstensi VS Code) untuk pengalaman terbaik.

## 🌐 Deployment

Project ini di-deploy menggunakan **GitHub Pages**. Setiap perubahan yang di-push ke branch utama akan otomatis tercermin di link live demo di atas (setelah GitHub Pages diaktifkan di pengaturan repo).

## 📝 Catatan

Project ini dibuat sebagai latihan/tugas UI cuaca sederhana. Data cuaca yang ditampilkan bersifat statis/dummy kecuali script.js dihubungkan ke API cuaca eksternal (misalnya OpenWeatherMap).

## 👤 Author

**Nama:** Youhana Aulia Zahwa
**NIM:** 252410103002