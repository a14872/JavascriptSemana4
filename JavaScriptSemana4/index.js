function funcao1(){
	var num1 = 10;

	funcao2(num1, 2); //levar valores por funções

}

function funcao2(num, num2){ 

	var soma = num + num2;

	alert(soma);
	return; //retorna / para de executar a função
	alert(soma);
}


function Recursividade(){
	funcaoRecursiva(5);
}

function funcaoRecursiva(var1){
	
	console.log(var1);

	if(var1!=0){
		funcaoRecursiva(var1 - 1); //executa a mesma função mas com o valor de var1 - 1
	}
	else{
		console.log("Fim da contagem");
	}

}

function pjQuery(){
	$("#pJQuery").html("Biblioteca JQuery"); // mesmo que document.getElementById.("pJQuery").innerHTML = "Biblioteca JQuery";
}


function DefArray(){
	var array = [12653, 873, 3913, "teste2", 94210];
	var array2 = new Array(5); //declarar array

	alert(array);
}

function vetorMatriz(){
	var vetor = [23, 65, "teste", 12]; //declarar vetor
	var matriz = [
		[12, 54, 72, 24],
		[83, 42, 65, 30]
	]; //declarar matriz
	

	alert(vetor[2]);

	alert(matriz[1][2]);
}

function pesquisaArray(){
	var array3 = [23, 67, 31, 850, "teste", 621];

	alert(array3.indexOf("teste", 2)); // encontra a posição de determinado valor num array, com possibilidade de escolher a posicao que começa
	alert(array3.includes("teste")); // encontra se existe o valor no array e retorna true/false
	alert(array3.find(element => element > 700)); // encontra o primeiro valor superior a 700 no array
}

function removerArray(){
	var array4 = [23, 65, 84, 21];

	array4.splice(2, 1); //Comeca na posicao 2 e remove 1 elemento

	alert(array4);
}

function adicionarArray(){
	var array5 = [23, 65, 84, 21];

	array5.push(5); //adiciona o valor 5 ao array na ultima posicao

	alert(array5);
}

function crescente(){
	var array6 = [23, 65, 84, 21];

	alert(array6.sort(function(a, b){return a-b})); // ordena o array de forma crescente
}

function decrescente(){
	var array7 = [23, 65, 84, 21];

	alert(array7.sort(function(a, b){return b-a})); // ordena o array de forma decrescente
}

function removerArraySort(){
	var array8 = [23, 65, 84, 21];

	array8.sort(function(a, b){return a-b}).splice(2, 1); // ordena o array e remove um elemento

	alert(array8);
}

function adicionarArraySort(){
	var array9 = [23, 65, 84, 21];

	array9.sort(function(a, b){return a-b}).push(5); // oredena o array e adiciona um elemento

	alert(array9);
}