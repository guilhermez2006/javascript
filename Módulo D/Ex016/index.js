function Contar() {
    // Pega os valores digitados pelo usuário e converte pra número
    let inicio = Number(document.getElementById('inicio').value);
    let fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);
    let resultado = document.getElementById('resultado');

    // Verifica se algum campo está vazio
    if (inicio === 0 && fim === 0 && passo === 0) {
        resultado.innerHTML = 'Preencha os dados corretamente!';
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
