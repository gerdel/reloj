function inicio (hora,minu,sec) {
	var m = new Date();
	var hora = m.getHours();
	var minu = m.getMinutes();
	var sec = m.getSeconds();
	sec = horaVerano(sec);
	minu = horaVerano(minu);
	var recargar = setTimeout('inicio()',500);
	
	if (hora >= 12 && hora <= 24 ){
		document.getElementById("hora").innerHTML=hora + ":" + minu + ":" + sec + " PM"; 
	}else{
		document.getElementById("hora").innerHTML=hora + ":" + minu + ":" + sec + " AM";
	}
}

	
function horaVerano (hms) {
	if (hms < 10){
		hms = "0" + hms;
	}
	return hms;
}