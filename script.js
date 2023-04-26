// PENAMPUNGAN DATA
const nav = document.getElementById('nav');
const main = document.querySelector('main');
const container = document.getElementsByClassName('container')[0];
const jadwalPelajaran = document.querySelector('.container h4');
const hari = document.querySelectorAll('.hari')
const card = document.querySelectorAll('.container .card')
const a = document.querySelectorAll('.container .card a'); 

// UBAH GAMBAR BULAN MENJADI MATAHARI

const moon = document.getElementById('moon');
moon.addEventListener('click', function(){
    if(moon.classList[1] == 'fa-moon'){
        moon.classList.replace('fa-moon' ,'fa-sun');
        const darkMode = cahayaKegelapan();

    } else {
        moon.classList.replace('fa-sun' ,'fa-moon');
        const lightMode = cahayaIllahi()
    };
});

// fitur darkmode bos(darkmode);
function cahayaKegelapan(){
    nav.style.backgroundColor = '#16161a'
    nav.style.color = '#7f5af0';
    moon.style.color = '#7f5af0';
    main.style.backgroundImage = 'linear-gradient(#16161a, #7f5af0)';
    container.style.backgroundColor = '#16161a';
    jadwalPelajaran.style.backgroundColor = '#7f5af0';
    jadwalPelajaran.style.color = 'black';
    hari.forEach(function(day){
        day.style.backgroundColor = '#2cb67d';
    })
    card.forEach(function(kartu){
        kartu.style.backgroundColor = '#7f5af0'
    });
    a.forEach(function(link){
        link.style.backgroundColor = '#16161a'
    })
}

// fitur cahayaIllahi(lightmode);
function cahayaIllahi(){
    nav.style.backgroundColor = '#ddd';
    nav.style.color = 'black';
    moon.style.color = '#271c19';
    main.style.backgroundImage = ' linear-gradient(#55423d, #140d0b)'
    container.style.backgroundColor = '#55423d'
    jadwalPelajaran.style.backgroundColor = '#ffc0ad'
    jadwalPelajaran.style.color = '#271c19'
    hari.forEach(function(day){
        day.style.backgroundColor = '#e78fb3';
    })
    card.forEach(function(kartu){
        kartu.style.backgroundColor = '#ffc0ad'
    });
    a.forEach(function(link){
        link.style.backgroundColor = '#140d0b'
    })
}