function mostrarPestaña (pesta) 
{
	div1 = document.getElementById('wsgenerator');
    div2 = document.getElementById('ToDo');
    div3 = document.getElementById('cftw');
    div4 = document.getElementById('RDC');
    div5 = document.getElementById('TelBots');
    div6 = document.getElementById('AlgoChess');
    div7 = document.getElementById('Espeis');
    div8 = document.getElementById('HashenC');
    div9 = document.getElementById('CPOS');
    div10 = document.getElementById('Api');
    div11 = document.getElementById('sendai');
    div12 = document.getElementById('FFPDF');
    div13 = document.getElementById('umzugwings');
    div14 = document.getElementById('Wordpress');
    
    

    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';
    div8.style.display = 'none';
    div9.style.display = 'none';
    div10.style.display = 'none';
    div11.style.display = 'none';
    div12.style.display = 'none';
    div13.style.display = 'none';
    div14.style.display = 'none';
    
    console.log(pesta);
    divSeleccionado = document.getElementById(pesta);
    console.log(divSeleccionado);
    divSeleccionado.style.display = 'block';
    document.getElementById(pesta).scrollIntoView();
}