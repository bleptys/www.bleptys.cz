<script type="text/javascript">

function GetDays(){
	var dropdt = new Date(document.getElementById("ukoncenipobytu").value);
	var pickdt = new Date(document.getElementById("zacatekpobytu").value);
	return parseInt((dropdt - pickdt) / (24 * 3600 * 1000));
}

function cal(){
	if(document.getElementById("ukoncenipobytu")){
		(document.getElementById("numdays2").value=GetDays();
}
}
</script>