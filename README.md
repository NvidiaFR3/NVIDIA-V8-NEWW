# NVIDIA-V8-NEWW

Easy and simple when used 

## 🔗 Cara Penggunaaan

- 1. Ke Panel Pterodactlyl

- 2. Ke server panel anda

-  4. Upload Script

- 5. Ganti startup menjadi

```bash
npm start
```

- 6. lalu start sudah

## 📂 Cara Add Database

1. pergi ke grub update nvidia

2. cek link database yang di sediakan di deskripsi

3. masuk Ke website nya

4. masukan password

5. lalu regristasi kan nomor kalian

## 📌 Fitur Unggulan

1. Bugmenu

2. auto buy integrasion Order Kouta

3. Search menu

4. download menu

5. Creat panel and admin panel

## 📖 Baileys And Code

1. Bailys Yang Di Gunakan

```JSON
"@whiskeysockets/baileys": "npm:fr3"
```

2. code auto join ch

```Javascript
FR3.newsletterFollow("120363380080841414@newsletter");
```

3. Code Auto Clear Sesion Per Jam

```Javascript
async function autoClean(FR3) {
  try {
    const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json");
    const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A");

    dirsesi.forEach(file => fs.unlinkSync(path.join("./session", file)));
    dirsampah.forEach(file => fs.unlinkSync(path.join("./library/database/sampah", file)));

    const report = `*Berhasil membersihkan sampah perjam ✅*\n*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`;
    console.log(chalk.greenBright('[*] ' + report));

    if (FR3) {
      await safeSendMessage(FR3, "62882008771871@s.whatsapp.net", { text: report });
    }
  } catch (err) {
    console.log(chalk.redBright('[!] Gagal membersihkan sampah:', err));
  }
}
```

```Javascript
      console.log(chalk.magenta.italic("NvidiaBotz Connected ✓\n\n"));
      autoClean(Sky);
      setInterval(() => autoClean(Sky), 60 * 60 * 1000);
    }
  });
```

## ℹ️ Informasi Nvidia Botz V8

- Version 8.0.0 Official
- Versi Baileys 1.0.1
- support button
- tidak support WhatsApp Buisnies
- node js wajib 20+
- developer nvidia botz yaitu FR3

## 👥 contact Developer (FR3)

📱 WhatsApp: [Kontak Dev](https://wa.me/62882008771871)
