const urlParams = new URLSearchParams(window.location.search);
const videoUrl = urlParams.get('url');
document.title = "Web Player with DPlayer - " + videoUrl;
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    screenshot: true,
    autoplay: true,
    hotkey: true,
    preventClickToggle: true,
    video: {
        url: videoUrl,
        type: 'auto'
    },
    hls: true,
    dash: true,
    xhrSetup: {
        headers: {
            'Referer': 'https://dplayer.js.org/'
        }
    },
    pluginOptions: {
        hls: {
            enable: true
        },
        dash: {
            enable: true
        }
    }
});

// Deteksi saat video memasuki fullscreen
dp.on('fullscreen', function () {
// Tambahkan class CSS untuk tampilan fullscreen video
    dp.container.classList.add('dplayer-fullscreen');
});

// Deteksi saat video keluar dari fullscreen
dp.on('fullscreen_cancel', function () {
// Hapus class CSS untuk tampilan fullscreen video
    dp.container.classList.remove('dplayer-fullscreen');
});

// Deteksi saat video memasuki mode web-fullscreen
dp.on('webfullscreen', function () {
// Tambahkan kelas CSS untuk menampilkan video player di tengah
    dp.container.classList.add('dplayer-web-fullscreen');
});

// Deteksi saat video keluar dari mode web-fullscreen
dp.on('webfullscreen_cancel', function () {
// Hapus kelas CSS untuk menampilkan video player di tengah
    dp.container.classList.remove('dplayer-web-fullscreen');
});