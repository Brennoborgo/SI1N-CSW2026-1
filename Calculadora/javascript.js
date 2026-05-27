
/*
Script iniciante: calcula a idade a partir do ano de nascimento.

Explicação rápida:
- Pega o valor do campo de entrada (input)
- Converte para número
- Calcula idade usando o ano atual
- Mostra o resultado dentro da caixa `div#resultado`
*/

function calcularIdade() {
	// 1) ler valor do input
	const anoStr = document.getElementById('anoNascimento').value;

	// 2) converter para número (Number) — iniciantes: +anoStr também funciona
	const ano = Number(anoStr);

	// elemento onde vamos mostrar o resultado
	const res = document.getElementById('resultado');

	// 3) validação simples
	if (!ano || ano < 1900 || ano > new Date().getFullYear()) {
		res.textContent = 'Digite um ano válido';
		return;
	}

	// 4) calcular a idade e mostrar
	const idade = new Date().getFullYear() - ano;
	res.textContent = 'Você tem ' + idade + ' anos';
}

