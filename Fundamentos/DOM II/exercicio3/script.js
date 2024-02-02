

const paragrafo = document.getElementById('mensagem')
//console.log(paragrafo);

const checaShift = (event) =>{

	console.log(event.shiftKey);

	if(event.shiftKey){
		paragrafo.innerHTML = 'SEGURANDO O SHIFT'
	}else{
		paragrafo.innerHTML = ''
	}

}