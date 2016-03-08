window.addEventListener('load', function() {
	//stran nalozena
	
	var izvediPrijavo = function(event) {
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		if (uporabnik!=""){
			document.querySelector(".pokrivalo").style.visibility = "hidden";
		} else {
			alert("Vnesite ime.");
		}
	}
	
	var dodajOpomnik = function(event) {
		var naziv = document.querySelector("#naziv_opomnika").value;
		var cas = document.querySelector("#cas_opomnika").value;
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		
		if(cas== "") {
			cas=0;
		}
		
		document.querySelector("#opomniki").innerHTML += " \
			<div class='opomnik'> \
	            <div class='naziv_opomnika'>" + naziv + "</div> \
	            <div class='cas_opomnika'> Opomnik čez <span>" + cas + "</span> sekund.</div> \
			</div>"	
		
	}
	
	
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik)
	
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});