function cal(){
	let a,b,c,d,e,f,g,h,i,j;
	a = new Date(document.getElementById("drop_date").value);
	b = new Date(document.getElementById("pick_date").value);
	c = (a - b) / (24 * 3600 * 1000);//pocet noci a-b...
	e = c * 370 * Number(document.getElementById("pocetdospelych").value);//pocet dospelych jen cislo
	f = c * 190 * Number(document.getElementById("dospelapolopenze").value);
	g = c * 350 * Number(document.getElementById("pocetdeti").value);
	h = c * 150 * Number(document.getElementById("detskapolopenze").value);
	i = c * 150 * Number(document.getElementById("domacimazlicek").value);
	j = c * 100 * Number(document.getElementById("pocetaut").value);
	d = e + f + g + h + i + j;//cena za noc 370 * c * e 
	document.getElementById("numdays2").value= c;
	document.getElementById("celkem").value= d;
}