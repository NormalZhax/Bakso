// 1. FUNGSI UTAMA SAAT TOMBOL "BUKA HADIAH" DIKLIK
function openGift() {
    // Sembunyikan amplop hadiah depan
    document.getElementById('envelope').style.display = 'none';
    
    // Tampilkan seluruh konten anniversary utama
    document.getElementById('main').classList.remove('hidden');
    
    // Jalankan penghitung hari (Counter)
    startCounter();
    
    // Loloskan trigger musik tepat saat user melakukan klik
    var lagu = document.getElementById("myAudio");
    if (lagu) {
        lagu.play().catch(function(error) {
            console.log("Pemutaran musik otomatis tertahan oleh sistem browser: ", error);
        });
    }
}

// 2. FUNGSI UNTUK TOMBOL PLAY/PAUSE MANUAL
function toggleMusic(btn) {
    var lagu = document.getElementById("myAudio");
    
    if (lagu.paused) {
        lagu.play();
        btn.innerHTML = "Pause Music ⏸️";
    } else {
        lagu.pause();
        btn.innerHTML = "Play Music 🎵";
    }
}

// 3. FUNGSI PENGHITUNG HARI JADIAN (COUNTER)
function startCounter() {
    // Tanggal Anniversary kalian (29 Juni 2025)
    const start = new Date("2025-06-29");
    
    setInterval(() => {
        const now = new Date();
        const diff = now - start;
        
        // Rumus matematika untuk mengubah milidetik menjadi hari keseluruhan
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        document.getElementById('counter').innerText = days + " hari bersama ❤️";
    }, 1000);
}
