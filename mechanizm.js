var licznik=6;const ramka_foty=document.querySelector("#wszystko_galeria");onload=(()=>{for(let e=0;e<=licznik-1;e++)ramka_foty.innerHTML=ramka_foty.innerHTML+'<div class="fotka" id="fotka'+e+'" onclick="powieksz('+e+')" ><img src="foty/'+e+'.jpg" alt="fota" /></div>'}),klikn=(e=>{console.log(document.querySelectorAll(".fotka img")[e].src)}),powieksz=(e=>{let n=parseFloat(e+1),t=parseFloat(e-1);t<=0&&(t=licznik-1),n>=licznik&&(n=0),document.querySelector("#powieksz_menu").style.display="block",document.querySelector("#wybrane_zdj img").src="foty/"+e+".jpg",document.getElementById("dalej").innerHTML='<img src="dalej.png" alt="dalej" onclick="dalej('+parseFloat(n)+')"/>',document.getElementById("wstecz").innerHTML='<img src="dalej.png" alt="dalej" onclick="wstecz('+parseFloat(t)+')"/>',document.location.hash=e}),document.getElementById("zamknij").addEventListener("click",()=>{document.getElementById("powieksz_menu").style.display="none",document.location.hash=""}),dalej=(e=>{let n=parseFloat(e+1),t=parseFloat(e-1);n>=licznik&&(n=0),t<=0&&(t=licznik),document.querySelector("#wybrane_zdj img").src="foty/"+e+".jpg",document.getElementById("dalej").innerHTML='<img src="dalej.png" alt="dalej" onclick="wstecz('+n+')"/>',document.getElementById("wstecz").innerHTML='<img src="dalej.png" alt="dalej" onclick="dalej('+t+')"/>',document.location.hash=e}),wstecz=(e=>{let n=parseFloat(e-1),t=parseFloat(e+1);n<0&&(n=licznik-1),t>=licznik&&(t=0),document.querySelector("#wybrane_zdj img").src="foty/"+e+".jpg",document.getElementById("wstecz").innerHTML='<img src="dalej.png" alt="dalej" onclick="wstecz('+n+')"/>',document.getElementById("dalej").innerHTML='<img src="dalej.png" alt="dalej" onclick="dalej('+t+')"/>',document.location.hash=e}),zmianahash=(()=>{""!=window.location.hash&&powieksz(window.location.hash.substr(1))}),zmianahash(),window.location.addEventListener("onChange",zmianahash());
