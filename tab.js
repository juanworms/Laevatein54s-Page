function mostrarPestaña (pesta) 
{
	div1 = document.getElementById('cftw');
    div2 = document.getElementById('Super42');
    div3 = document.getElementById('RDC');

    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    
    divSeleccionado = document.getElementById(pesta);
    divSeleccionado.style.display = 'block';
}