var licznik = 6;


const ramka_foty = document.querySelector("#wszystko_galeria");
onload = () => {
    for (let i = 0; i <= licznik-1; i++) {
        ramka_foty.innerHTML = ramka_foty.innerHTML + '<div class="fotka" id="fotka' + i + '" onclick="powieksz(' + i + ')" ><img src="' + i + '.jpg" alt="fota" /></div>';
    }



    /*
for (i=0;i<4;i++) {
document.querySelectorAll('.fotka img')[i].addEventListener('click',klikn(i));
}
*/
}
klikn = (i) => { console.log(document.querySelectorAll('.fotka img')[i].src) }

powieksz = (nazwa) => {

//document.querySelector('#powieksz_menu').innerHTML = '<button id="zamknij">X</button><button id="wstecz"></button><div id="wybrane_zdj"><img alt="fota" /></div><button id="dalej"></button>';



    let dalej = parseFloat(nazwa + 1);
    let wstecz = parseFloat(nazwa - 1);
    if (wstecz <= 0) {
        wstecz = licznik - 1;
    }
    if (dalej >= licznik) {
        dalej = 0;
    }
    document.querySelector('#powieksz_menu').style.display = "block";
    document.querySelector('#wybrane_zdj img').src = '/' + nazwa + '.jpg';
    document.getElementById('dalej').innerHTML = '<img src="dalej.png" alt="dalej" onclick="dalej('+ parseFloat(dalej) +')"/>';
    document.getElementById('wstecz').innerHTML = '<img src="dalej.png" alt="dalej" onclick="wstecz('+ parseFloat(wstecz) +')"/>';
    document.location.hash = nazwa;
}

document.getElementById('zamknij').addEventListener('click', () => {
    document.getElementById('powieksz_menu').style.display = "none";
    document.location.hash = '';
})



dalej = (nazwa) => {
    let dalej = parseFloat(nazwa + 1);
    let wstecz = parseFloat(nazwa - 1);
    if (dalej >= licznik) {
       dalej = 0; 
    }
    if (wstecz <= 0) {
wstecz = licznik;
    }
    document.querySelector('#wybrane_zdj img').src = '' + nazwa + '.jpg';
    document.getElementById('dalej').innerHTML = '<img src="dalej.png" alt="dalej" onclick="wstecz('+ dalej +')"/>';
    document.getElementById('wstecz').innerHTML = '<img src="dalej.png" alt="dalej" onclick="dalej('+ wstecz +')"/>';
    document.location.hash = nazwa;
}


wstecz = (nazwa) => {
    let wstecz =  parseFloat(nazwa - 1);
    let dalej = parseFloat(nazwa + 1);
    if (wstecz <= 0) {
        wstecz = licznik - 1;
    }
    if (dalej >= licznik) {
        dalej = 0;
    }
    document.querySelector('#wybrane_zdj img').src = '' + nazwa + '.jpg';
    document.getElementById('wstecz').innerHTML = '<img src="dalej.png" alt="dalej" onclick="wstecz('+ wstecz +')"/>';
    document.getElementById('dalej').innerHTML = '<img src="dalej.png" alt="dalej" onclick="dalej('+ dalej +')"/>';
    document.location.hash = nazwa;
}


zmianahash = () => {
    if (window.location.hash != '') {
        powieksz(window.location.hash.substr(1)); 
    }
}
zmianahash();
