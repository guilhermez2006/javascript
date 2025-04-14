function Contar() {
    // Pega os valores digitados pelo usuário
    let inicio = document.getElementById('inicio').value;
    let fim = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value;
    let resultado = document.getElementById('resultado');

    // Verifica se algum campo está vazio
    if (inicio === '' || fim === '' || passo === '') {
        resultado.innerHTML = '🚫 Preencha todos os campos!';
        return;
    }

    if (passo <= 0) {
        alert('Passo inválido! Considerando PASSO 1');
        passo = 1;
    }

    resultado.innerHTML = 'Contando: <br>';

    // Contagem crescente
    if (inicio < fim) {
        for (let i = inicio; i <= fim; i += passo) {
            resultado.innerHTML += `👉 ${i} `;
        }
    } 
    // Contagem decrescente
    else {
        for (let i = inicio; i >= fim; i -= passo) {
            resultado.innerHTML += `👉 ${i} `;
        }
    }

    resultado.innerHTML += '🏁';
}
