# DearMe

DearMe adalah aplikasi chat AI pendengar dengan persona Nara, Raka, dan Sena.

## Status proyek

Repository sedang disiapkan untuk menjadi aplikasi Android menggunakan Capacitor. Source web utama yang harus ada di root repository:
- `index.html`
- `persona.js`

Backend AI menggunakan Node.js/Express (`server.js`) dan harus di-host secara terpisah. Jangan menaruh API key Gemini/OpenAI di aplikasi Android.

## Menjalankan backend

Gunakan Node.js 20.6 atau lebih baru.

```bash
npm install
cp env.example .env
# Isi GEMINI_API_KEY atau OPENAI_API_KEY di .env
npm start
```

## Menyiapkan Android

```bash
npm install
npm run build:web
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

## Build otomatis

Workflow `.github/workflows/android-apk.yml` berjalan saat ada push ke `main` atau melalui Actions > DearMe Android APK > Run workflow.

APK debug akan tersedia sebagai artifact bernama `DearMe-debug-apk`.

## Catatan penting sebelum APK dipakai

1. Backend AI harus di-deploy ke HTTPS.
2. URL backend harus dikonfigurasi di frontend; endpoint relatif `/api/chat` saat ini hanya bekerja ketika frontend disajikan oleh server yang sama.
3. API key hanya disimpan di backend, bukan di APK.
4. Sebelum rilis publik, lengkapi kebijakan privasi dan syarat layanan. Riwayat curhat termasuk data yang sensitif.
5. Deteksi krisis berbasis kata kunci bukan pengganti bantuan profesional.

## Keamanan

Jangan commit file `.env`, API key, token, atau kredensial.
