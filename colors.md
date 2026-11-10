# Referensi Palet Warna Portfolio Zefania

Halo! Sebagai Senior Designer, saya sangat setuju bahwa desain web ini butuh sentuhan warna yang lebih hidup (vibrant) agar terkesan lebih modern, dinamis, dan tidak kaku. Mengingat profil Zefania lekat dengan **Teknik Kimia, Energi Terbarukan (Biomassa), dan Inovasi**, warna-warna ini dirancang untuk menonjolkan kesan profesional namun energik.

Berikut adalah 3 opsi palet warna yang bisa diimplementasikan oleh tim developer/AI Anda. Format ini sudah disesuaikan persis dengan struktur token CSS di `style.css` Anda (`:root`).

---

## Opsi 1: "Sustainable Emerald" (Sangat Direkomendasikan)
Cocok untuk menonjolkan fokus Zefania pada **Green Energy, Biomassa, dan Keberlanjutan (Sustainability)**. Terlihat sangat segar, modern, dan optimis.

```css
:root {
  --background: #F4F7F5;     /* Putih bersih dengan hint hijau yang sangat lembut */
  --surface: #E6EFE9;        /* Hijau keabu-abuan terang untuk elemen card/surface */
  --accent: #10B981;         /* Emerald Green yang sangat hidup dan vibrant */
  --accent-light: #6EE7B7;   /* Hijau mint terang untuk hover/aksen sekunder */
  --text: #064E3B;           /* Hijau pinus sangat gelap (hampir hitam) untuk teks, lebih elegan dari hitam biasa */
  --muted: #4B5563;          /* Abu-abu netral untuk teks sekunder */
  --dark-section: #022C22;   /* Hijau super gelap untuk section gelap (hero/footer) */
  --dark-text: #F4F7F5;      /* Teks terang di section gelap */
  --dark-muted: #A7F3D0;     /* Mint redup untuk teks sekunder di section gelap */
}
```

---

## Opsi 2: "Industrial Cobalt"
Menonjolkan sisi **Teknologi, Presisi, dan Proses Industri (Quality Control)**. Biru kobalt memberikan kesan pintar (smart), terpercaya, namun tetap sangat dinamis.

```css
:root {
  --background: #F8FAFC;     /* Putih slate yang sangat crisp dan modern */
  --surface: #F1F5F9;        /* Abu-abu kebiruan terang untuk kedalaman */
  --accent: #2563EB;         /* Biru Kobalt yang menyala dan berani */
  --accent-light: #93C5FD;   /* Biru langit terang */
  --text: #0F172A;           /* Navy sangat gelap untuk kontras bacaan yang maksimal */
  --muted: #64748B;          /* Slate gray untuk teks sekunder */
  --dark-section: #020617;   /* Slate/Navy nyaris hitam pekat untuk kontras yang dramatis */
  --dark-text: #F8FAFC;      /* Teks putih terang */
  --dark-muted: #94A3B8;     /* Abu-abu terang untuk teks sekunder */
}
```

---

## Opsi 3: "Chemical Crimson"
Pilihan berani (bold) yang merepresentasikan **Energi, Reaksi Kimia, dan Semangat Kepemimpinan**. Hangat, sangat menonjol, dan pasti akan meninggalkan kesan pertama yang kuat (WOW effect).

```css
:root {
  --background: #FFFAFA;     /* Snow white yang hangat */
  --surface: #FEE2E2;        /* Merah muda super terang untuk surface */
  --accent: #E11D48;         /* Crimson/Rose merah menyala */
  --accent-light: #FDA4AF;   /* Pink lembut untuk transisi/hover */
  --text: #111827;           /* Hitam pekat agar teks tetap solid */
  --muted: #6B7280;          /* Abu-abu standar */
  --dark-section: #1F1215;   /* Hitam dengan undertone merah maroon gelap */
  --dark-text: #F9FAFB;      /* Putih bersih */
  --dark-muted: #FCA5A5;     /* Pink redup agar tetap selaras dengan tema gelap */
}
```

---

## Opsi 4: "Sunny Intellect" (Ceria & Pintar)
Kombinasi kuning cerah (amber) dan navy blue yang sangat merepresentasikan perpaduan antara **Keceriaan, Kreativitas, dan Kecerdasan**. Warna biru tua menjaga kesan "smart people" dan profesional, sementara kuning memberikan energi positif dan semangat.

```css
:root {
  --background: #FFFAFA;     /* Putih hangat yang bersahabat */
  --surface: #FEF3C7;        /* Kuning super lembut untuk kedalaman */
  --accent: #F59E0B;         /* Amber/Kuning cerah yang sangat energik dan ceria */
  --accent-light: #FDE68A;   /* Kuning pastel terang untuk interaksi/hover */
  --text: #1E3A8A;           /* Navy blue pekat untuk teks, menonjolkan kesan pintar/akademis */
  --muted: #64748B;          /* Biru keabu-abuan (slate) */
  --dark-section: #1E3A8A;   /* Navy pekat untuk hero/footer agar terlihat elegan */
  --dark-text: #FFFBEB;      /* Putih gading cerah */
  --dark-muted: #93C5FD;     /* Biru langit redup di atas background gelap */
}
```

---

## Opsi 5: "Creative Violet" (Ceria & Inovatif)
Warna ungu cerah dipadukan dengan latar bersih. Warna ini melambangkan **Pikiran yang Inovatif, Visioner, dan Tech-Savvy** namun tetap terasa sangat muda dan ceria (pop style).

```css
:root {
  --background: #FAFAFA;     /* Putih bersih netral */
  --surface: #F3E8FF;        /* Ungu pastel sangat lembut untuk surface */
  --accent: #9333EA;         /* Ungu violet yang menyala dan ceria */
  --accent-light: #D8B4FE;   /* Ungu lilac terang */
  --text: #0F172A;           /* Hitam/Navy pekat */
  --muted: #475569;          /* Abu-abu slate */
  --dark-section: #2E1065;   /* Ungu sangat gelap (deep violet) untuk section gelap */
  --dark-text: #FAFAFA;      /* Putih terang */
  --dark-muted: #C084FC;     /* Ungu neon redup untuk teks sekunder */
}
```

---

### Instruksi Implementasi untuk AI Selanjutnya:
Copy-paste salah satu blok CSS di atas untuk menimpa nilai `:root` dari baris 4 sampai 13 di dalam file `style.css`. Tidak perlu merubah struktur HTML atau variabel lain, cukup update _value_ hex code-nya saja.



# Colors.md — Referensi Palet Warna (Modern, Hidup, Smart)

> Catatan implementasi: hanya variabel warna (`--background`, `--surface`, `--accent`, `--accent-light`, `--text`, `--muted`, `--dark-section`, `--dark-text`, `--dark-muted`) yang berubah. Variabel font (`--font-display`, `--font-body`, `--font-mono`), `--ease`, dan `--container` **TIDAK diubah** — tetap sama seperti style.css asli. Cukup replace blok `:root { ... }` sesuai tema yang dipilih.

---

## 1. Electric Violet (Enhanced) — versi lebih hidup dari tema asli
Ungu tetap jadi identitas, tapi accent dibuat lebih neon & kontras naik.

```css
:root {
  --background: #FAFAFA;
  --surface: #F3E8FF;
  --accent: #A21CAF;
  --accent-light: #E9D5FF;
  --text: #0F0A1E;
  --muted: #57534E;
  --dark-section: #240046;
  --dark-text: #FAFAFA;
  --dark-muted: #D8B4FE;
}
```

---
BAGUS
## 2. Cyber Cyan — futuristik, techy, "smart"
Cocok untuk portfolio developer/tech, kesan digital dan presisi.

```css
:root {
  --background: #F8FAFC;
  --surface: #E0F2FE;
  --accent: #0891B2;
  --accent-light: #67E8F9;
  --text: #0B1120;
  --muted: #475569;
  --dark-section: #052E3D;
  --dark-text: #F0FDFF;
  --dark-muted: #5EEAD4;
}
```

---

## 3. Coral Sunset — hangat, energik, ramah
Cocok untuk brand yang ingin terasa hidup dan approachable.

```css
:root {
  --background: #FFFBF7;
  --surface: #FFE4E0;
  --accent: #F0402A;
  --accent-light: #FFB199;
  --text: #241009;
  --muted: #78716C;
  --dark-section: #3A0E0A;
  --dark-text: #FFF7ED;
  --dark-muted: #FDBA8C;
}
```

---
BAGUS
## 4. Emerald Fresh — segar, natural, terpercaya 
Cocok untuk kesan profesional tapi tetap hidup, fintech/sustainability.

```css
:root {
  --background: #F7FDF9;
  --surface: #D1FAE5;
  --accent: #059669;
  --accent-light: #6EE7B7;
  --text: #052E20;
  --muted: #44534B;
  --dark-section: #022C22;
  --dark-text: #ECFDF5;
  --dark-muted: #6EE7B7;
}
```

---

## 5. Magenta Pulse — berani, kreatif, eye-catching
Untuk portfolio desainer/kreator yang ingin tampil mencolok.

```css
:root {
  --background: #FDF7FB;
  --surface: #FCE7F3;
  --accent: #DB2777;
  --accent-light: #F9A8D4;
  --text: #1A0A14;
  --muted: #57534E;
  --dark-section: #4A0A2E;
  --dark-text: #FDF2F8;
  --dark-muted: #F0ABFC;
}
```

---

## 6. Amber Gold — mewah, hangat, percaya diri
Kesan premium, cocok untuk brand personal yang ingin terasa "berkelas tapi hidup".

```css
:root {
  --background: #FFFDF7;
  --surface: #FEF3C7;
  --accent: #D97706;
  --accent-light: #FCD34D;
  --text: #241A05;
  --muted: #6B5B3D;
  --dark-section: #3B2408;
  --dark-text: #FFFBEB;
  --dark-muted: #FDE68A;
}
```

---

## 7. Indigo Cyber — smart, korporat-tech, tegas
Kombinasi biru-ungu, terasa cerdas dan modern tanpa terlalu playful.

```css
:root {
  --background: #F8F9FE;
  --surface: #E0E7FF;
  --accent: #4338CA;
  --accent-light: #A5B4FC;
  --text: #0B0F2C;
  --muted: #4B5065;
  --dark-section: #1E1B4B;
  --dark-text: #EEF2FF;
  --dark-muted: #A5B4FC;
}
```

---

## 8. Lime Volt — energik, muda, berani banget
Untuk brand Gen-Z / startup yang ingin tampil sangat hidup dan playful.

```css
:root {
  --background: #FBFDF6;
  --surface: #ECFCCB;
  --accent: #65A30D;
  --accent-light: #BEF264;
  --text: #14210A;
  --muted: #4D5B3A;
  --dark-section: #1A2E05;
  --dark-text: #F7FEE7;
  --dark-muted: #D9F99D;
}
```

---

## 9. Ocean Deep — tenang tapi hidup, profesional
Biru laut yang kalem di light mode tapi punya dark section yang dramatis.

```css
:root {
  --background: #F6FAFD;
  --surface: #DBEAFE;
  --accent: #1D4ED8;
  --accent-light: #93C5FD;
  --text: #0A1526;
  --muted: #475569;
  --dark-section: #0C1E3E;
  --dark-text: #EFF6FF;
  --dark-muted: #93C5FD;
}
```

---

## 10. Crimson Bold — tegas, powerful, dramatis
Merah yang matang, cocok untuk personal brand yang ingin terlihat berani.

```css
:root {
  --background: #FFFAFA;
  --surface: #FEE2E2;
  --accent: #DC2626;
  --accent-light: #FCA5A5;
  --text: #200606;
  --muted: #57534E;
  --dark-section: #450A0A;
  --dark-text: #FEF2F2;
  --dark-muted: #FCA5A5;
}
```

---

## 11. Peach Pop — lembut tapi ceria
Nuansa pastel hangat, terasa ramah dan modern, tetap ada "pop" di accent.

```css
:root {
  --background: #FFFBF9;
  --surface: #FFEDD5;
  --accent: #EA580C;
  --accent-light: #FDBA74;
  --text: #241505;
  --muted: #6B5B4D;
  --dark-section: #431407;
  --dark-text: #FFF7ED;
  --dark-muted: #FDBA74;
}
```

---

## 12. Mint Cool — segar, bersih, modern-tech
Kombinasi mint-teal, terasa "smart & fresh", cocok untuk SaaS/produk digital.

```css
:root {
  --background: #F6FDFB;
  --surface: #CCFBF1;
  --accent: #0D9488;
  --accent-light: #5EEAD4;
  --text: #06231E;
  --muted: #475569;
  --dark-section: #042F2E;
  --dark-text: #F0FDFA;
  --dark-muted: #5EEAD4;
}
```

---

## 13. Sunset Gradient Vibe — pink-oranye, sangat hidup
Cocok kalau ingin kesan playful sekaligus premium, banyak dipakai brand kreatif modern.

```css
:root {
  --background: #FFFAF8;
  --surface: #FFE1E7;
  --accent: #F43F5E;
  --accent-light: #FDA4AF;
  --text: #240A11;
  --muted: #6B5259;
  --dark-section: #4C0519;
  --dark-text: #FFF1F2;
  --dark-muted: #FDA4AF;
}
```

---

## 14. Royal Cobalt — biru tegas, "smart & confident"
Untuk kesan sangat profesional tapi tidak membosankan, cocok untuk consulting/tech portfolio.

```css
:root {
  --background: #F7F9FC;
  --surface: #DBEAFE;
  --accent: #2563EB;
  --accent-light: #93C5FD;
  --text: #0A1121;
  --muted: #475569;
  --dark-section: #0B1D3A;
  --dark-text: #EFF6FF;
  --dark-muted: #BFDBFE;
}
```

---

## Rekomendasi Pemilihan

| Kesan yang diinginkan | Tema |
|---|---|
| Tetap ungu tapi lebih hidup | #1 Electric Violet |
| Techy / developer / futuristik | #2 Cyber Cyan, #7 Indigo Cyber |
| Hangat & energik | #3 Coral Sunset, #11 Peach Pop |
| Profesional tapi segar | #4 Emerald Fresh, #12 Mint Cool |
| Kreatif & berani | #5 Magenta Pulse, #13 Sunset Gradient |
| Mewah & percaya diri | #6 Amber Gold |
| Muda & sangat playful | #8 Lime Volt |
| Tenang tapi dramatis | #9 Ocean Deep, #14 Royal Cobalt |
| Tegas & powerful | #10 Crimson Bold |

**Panduan untuk AI yang implementasi:**
1. Ganti hanya blok `:root { ... }` warna di atas — jangan sentuh `--font-*`, `--ease`, `--container`.
2. Pastikan kontras teks vs background tetap memenuhi standar aksesibilitas (rasio minimal 4.5:1 untuk teks body).
3. `--dark-section` dipakai untuk section gelap (hero/footer biasanya) — pastikan `--dark-text` & `--dark-muted` tetap terbaca jelas di atasnya.
4. `--accent` dipakai untuk CTA/button/highlight utama, `--accent-light` untuk hover state atau elemen sekunder.