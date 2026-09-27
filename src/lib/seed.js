'use strict';
const { get, run } = require('./db');
const { hashPassword } = require('./password');

function seedIfEmpty() {
  const adminCount = get('SELECT COUNT(*) as c FROM admins').c;
  if (adminCount === 0) {
    run('INSERT INTO admins (username, password_hash, name) VALUES (?, ?, ?)', [
      'admin',
      hashPassword('admin123'),
      'Admin Toko',
    ]);
    console.log('[seed] Admin default dibuat -> username: admin / password: admin123 (segera ganti di Pengaturan)');
  }

  // Ainun Store dimulai tanpa kategori/produk contoh — silakan tambahkan
  // kategori dan produk sendiri lewat dashboard admin (/admin/kategori, /admin/produk/baru).
}

module.exports = { seedIfEmpty };
