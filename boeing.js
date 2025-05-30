const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'node_modules', '@whiskeysockets', 'baileys', 'lib', 'Utils', 'lt-hash.js');

if (!fs.existsSync(targetPath)) {
  console.error('[!] File lt-hash.js tidak ditemukan. Pastikan module Baileys sudah terinstall.');
  process.exit(1);
}

let content = fs.readFileSync(targetPath, 'utf-8');

const pattern = /new DataView\((.*?)\)/g;

if (pattern.test(content)) {
  const patched = content.replace(pattern, `
(() => {
  const input = $1;
  const buffer = input instanceof ArrayBuffer
    ? input
    : (Buffer.isBuffer(input)
      ? input.buffer.slice(input.byteOffset, input.byteOffset + input.byteLength)
      : new TextEncoder().encode(typeof input === 'string' ? input : '').buffer);
  return new DataView(buffer);
})()
  `);

  fs.writeFileSync(targetPath, patched, 'utf-8');
  console.log('[✓] lt-hash.js berhasil dipatch!');
} else {
  console.log('[i] lt-hash.js sudah tidak mengandung pattern raw DataView. Tidak perlu patch.');
}
