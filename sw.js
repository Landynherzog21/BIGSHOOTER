// Legacy service worker disabled to prevent stale cached BIGSHOOTER versions.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('bigshooter')).map(k=>caches.delete(k)));await self.clients.claim()})()));
