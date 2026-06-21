function pindahTombol() {
    const btnEngga = document.getElementById('btnEngga');
    const x = Math.random() * (window.innerWidth - btnEngga.offsetWidth - 40);
    const y = Math.random() * (window.innerHeight - btnEngga.offsetHeight - 40);
    
    btnEngga.style.left = x + 'px';
    btnEngga.style.top = y + 'px';
}

function pilihSayang() {
    document.getElementById('questionPage').style.display = 'none';
    document.getElementById('envelope').classList.remove('hidden');
}

function openGift() {
    Swal.fire({
        title: 'Happy Anniversary! ❤️',
        text: 'Membuka hadiah spesial untuk Kaiela...',
        icon: 'success',
        timer: 3000, 
        showConfirmButton: false, 
        timerProgressBar: true 
    });

    setTimeout(function() {
        document.getElementById('envelope').style.display = 'none';
        document.getElementById('main').classList.remove('hidden');
        
        startCounter();
        setInterval(buatEfekLove, 300);
        
        var lagu = document.getElementById("myAudio");
        if (lagu) {
            lagu.play().catch(function(error) {
                console.log("Musik otomatis tertahan oleh sistem browser: ", error);
            });
        }
    }, 3000); 
}

function buatEfekLove() {
    const heart = document.createElement('div');
    heart.classList.add('heart-fall');
    
    const tipeLove = ['❤️', '💖', '💝', '💕', '💗'];
    heart.innerText = tipeLove[Math.floor(Math.random() * tipeLove.length)];
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Fungsi toggleMusic menerima parameter 'btn' yang dikirim dari HTML onclick="toggleMusic(this)"
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

function startCounter() {
    const start = new Date("2025-06-29");
    
    setInterval(() => {
        const now = new Date();
        const diff = now - start;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        document.getElementById('counter').innerText = days + " hari bersama ❤️";
    }, 1000);
}
