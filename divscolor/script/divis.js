
function cambiarColor()
{
	let lista_parrafo=document.getElementsByTagName("p");
    let lista_divs=document.getElementsByTagName("div");
    for (i=0;i<lista_parrafo.length;i++){
        lista_parrafo[i].style.color="red";
        lista_parrafo[i].innerHTML="ROJO";
    }
    for(i=0;i<lista_divs.length;i++){
        lista_divs[i].style.color="green";
        lista_divs[i].innerHTML="VERDE";
    }
}
