//your JS code here. If required.
function display_ct5(){
	let x= new Date()
	let ampm= x.getHours() >= 12 ? ' PM':' AM';
	let x1= x.getMonth() + 1 + "/" + x.getDate() + "/" + x.getFullYear();
	x1= x1 + ", " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds() +" "+ ampm;
	document.getElementById('timer').innerHTML=x1;
	display_c5();
}
funtion display_c5(){
	let refresh=1000;
	let mytime=setTimeout('display_ct5()', refresh)
}
display_c5()