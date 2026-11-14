// Service worker minimal agar web bisa dipasang di layar HP.
// Sengaja tidak menyimpan cache apa pun: data akun dan saldo selalu diambil langsung dari server.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
