var a= prompt("Vvedy chislo", " ");
var d= prompt("Vvedy znak"," ");
var c= prompt("Vvedy chislo"," ");
var  s;
if (d=="+")
{
	s = (+a) + (+c);
}
else if(d =="-"){
	s = (+a)-(+c);
}
else if(d=="*"){
	s=(+a)*(+c);
}
else if(d==/){
	s=(+a)/(+c);
}
else{
	s=(+a)%(+c);
}
alert (s);




































