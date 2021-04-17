// var textoQueMuda = document.querySelector('#about p');

// textoQueMuda.addEventListener('click', function() {
//     textoQueMuda.innerHTML = '<a target="_blank" href="http://davidtmasin.github.io/" id="class">Clique aqui e veja mais!</a>'
// })

function calculoConversao() {
	
	var valorDolar = document.getElementById('dolar').value
	var dolarValor = Number(valorDolar.replace(',','.'))

	document.getElementById('resultado').value = (dolarValor * 5.51).toFixed(2).replace('.',',')

}

function limparValores() {
	
	document.getElementById('dolar').value = ""
	
	document.getElementById('resultado').value = ""
	
}