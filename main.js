// ==========================================
// FUNCIONES DE INICIO Y VIDEO
// ==========================================

function comenzarSorpresa() {
    document.getElementById('startScreen').style.display = 'none';
    
    const netflix = document.getElementById('netflixIntro');
    netflix.style.display = 'flex';
    netflix.classList.add('netflix-animate');

    setTimeout(() => {
        netflix.style.display = 'none';
        
        const video = document.getElementById('introVideo');
        video.style.display = 'block';
        video.play();

        setTimeout(() => {
            document.getElementById('skipBtn').style.display='block';
        }, 3000);

    }, 3000);
}

function iniciarHistoria() {
    const video = document.getElementById('introVideo');
    video.pause();
    video.style.display = 'none';

    document.getElementById('skipBtn').style.display = 'none';
    
    document.getElementById('contenido').style.display = 'flex';
    document.getElementById('letterBtn').style.display = 'flex'; 
    document.getElementById('replayBtn').style.display = 'flex'; 
    
    // Inicia la música de las cartas/inicio
    document.getElementById('musicaAC').play();
}

function replayVideo() {
    document.getElementById('contenido').style.display='none';
    document.getElementById('albumSection').style.display='none'; 
    document.getElementById('letterBtn').style.display='none';
    document.getElementById('replayBtn').style.display='none';
    
    const modals = ['mainLetterModal', 'lettersMenuModal', 'letterModal', 'secondLetterModal', 'thirdLetterModal', 'forthyLetterModal', 'fiveLetterModal', 'SixLetterModal',
        'detail1', 'detail2', 'detail3', 'detail4', 'detail5', 'detail6', 'detail7'];
    modals.forEach(id => {
        let modal = document.getElementById(id);
        if (modal) {
            modal.style.display = 'none';
            let videos = modal.getElementsByTagName("video");
            for (let i = 0; i < videos.length; i++) {
                videos[i].pause();
            }
        }
    });

    // Detener ambas pistas de música
    const musicaAC = document.getElementById('musicaAC');
    musicaAC.pause();
    musicaAC.currentTime = 0;
    
    const musicaGR = document.getElementById('musicaGR');
    musicaGR.pause();
    musicaGR.currentTime = 0;

    const video = document.getElementById('introVideo');
    video.currentTime = 0;
    video.style.display = 'block';
    video.play();

    document.getElementById('skipBtn').style.display='block';
}

// ==========================================
// FUNCIONES DEL BUZÓN Y CARTAS
// ==========================================

function showMainLetter() { 
    document.getElementById('mainLetterModal').style.display = 'flex'; 
}
function closeMainLetter() { 
    document.getElementById('mainLetterModal').style.display = 'none'; 
}

function showLettersMenu() { 
    document.getElementById('lettersMenuModal').style.display = 'flex'; 
}
function closeLettersMenu() { 
    document.getElementById('lettersMenuModal').style.display = 'none'; 
}

function openSpecificLetter(modalId) {
    closeLettersMenu();
    document.getElementById(modalId).style.display = 'flex';
}

function closeLetter() { document.getElementById('letterModal').style.display = 'none'; }
function closeSecondLetter() { document.getElementById('secondLetterModal').style.display = 'none'; }
function closeThirdLetter() { document.getElementById('thirdLetterModal').style.display = 'none'; }
function closeForthyLetter() { document.getElementById('forthyLetterModal').style.display = 'none'; }
function closeFiveLetter() { document.getElementById('fiveLetterModal').style.display = 'none'; }
function closeSixLetter() { document.getElementById('sixLetterModal').style.display = 'none'; }
// ==========================================
// FUNCIONES DEL ÁLBUM DE FOTOS
// ==========================================

function showAlbum() {
    document.getElementById('contenido').style.display='none';
    document.getElementById('letterBtn').style.display='none'; 
    document.getElementById('replayBtn').style.display='none'; 
    document.getElementById('albumSection').style.display='flex';
    
    // Cambia la música a la de la galería
    document.getElementById('musicaAC').pause();
    document.getElementById('musicaGR').play();
}

function hideAlbum() {
    document.getElementById('albumSection').style.display='none';
    document.getElementById('contenido').style.display='flex';
    document.getElementById('letterBtn').style.display='flex'; 
    document.getElementById('replayBtn').style.display='flex'; 
    
    // Regresa a la música de inicio
    document.getElementById('musicaGR').pause();
    document.getElementById('musicaAC').play();
}

function openMomentDetail(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeMomentDetail(modalId) {
    document.getElementById(modalId).style.display = 'none';
    let modal = document.getElementById(modalId);
    let videos = modal.getElementsByTagName("video");
    for (let i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
}

// ==========================================
// CERRAR MODALES AL HACER CLIC FUERA
// ==========================================

window.onclick = function(event) {
    const modals = [
        'mainLetterModal', 'lettersMenuModal', 'letterModal', 'secondLetterModal', 'thirdLetterModal', 'forthyLetterModal', 'fiveLetterModal', 'SixLetterModal',
        'detail1', 'detail2', 'detail3', 'detail4', 'detail5', 'detail6', 'detail7'
    ];
    
    modals.forEach(id => {
        let modal = document.getElementById(id);
        if (modal && event.target == modal) {
            modal.style.display = "none";
            let videos = modal.getElementsByTagName("video");
            for (let i = 0; i < videos.length; i++) {
                videos[i].pause();
            }
        }
    });
}

// ==========================================
// ANIMACIONES DE FONDO (HOJAS Y BRILLOS)
// ==========================================

setInterval(() => {
    let hoja = document.createElement('div');
    hoja.className = 'falling-leaf';
    hoja.innerHTML = '🍂';
    hoja.style.left = (200 + Math.random() * 400) + 'px';
    document.body.appendChild(hoja);
    setTimeout(() => hoja.remove(), 7000);
}, 500);

setInterval(() => {
    let s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 6000);
}, 300);