// 1. FUNGSI UTAMA SAAT TOMBOL "BUKA HADIAH" DIKLIK
function openGift() {
    // Sembunyikan amplop hadiah depan
    document.getElementById('envelope').style.display = 'none';
    
    // Tampilkan seluruh konten anniversary utama
    document.getElementById('main').classList.remove('hidden');
    
    // Jalankan penghitung hari (Counter)
    startCounter();
    
    // Jalankan efek hujan love berjatuhan
    setInterval(buatEfekLove, 300); // Membuat hati baru setiap 0.3 detik
    
    // Loloskan trigger musik tepat saat user melakukan klik
    var lagu = document.getElementById("myAudio");
    if (lagu) {
        lagu.play().catch(function(error) {
            console.log("Pemutaran musik otomatis tertahan oleh sistem browser: ", error);
        });
    }
}

// 2. FUNGSI UNTUK MEMBUAT EFEK LOVE BERJATUHAN
function buatEfekLove() {
    const heart = document.createElement('div');
    heart.classList.add('heart-fall');
    
    // Variasi bentuk emoji love secara acak
    const tipeLove = ['❤️', '💖', '💝', '💕', '💗'];
    heart.innerText = tipeLove[Math.floor(Math.random() * tipeLove.length)];
    
    // Mengatur posisi munculnya love secara acak dari kiri ke kanan layar
    heart.style.left = Math.random() * 100 + "vw";
    
    // Mengatur ukuran love secara acak agar lebih estetik
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    
    // Mengatur kecepatan jatuh yang bervariasi (antara 3 sampai 6 detik)
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    
    document.body.appendChild(heart);
    
    // Menghapus elemen love setelah animasi selesai agar memori HP tidak berat
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// 3. FUNGSI UNTUK TOMBOL PLAY/PAUSE MANUAL
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

// 4. FUNGSI PENGHITUNG HARI JADIAN (COUNTER)
function startCounter() {
    const start = new Date("2025-06-29");
    
    setInterval(() => {
        const now = new Date();
        const diff = now - start;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        document.getElementById('counter').innerText = days + " hari bersama ❤️";
    }, 1000);
}
