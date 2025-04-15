// Versão tradicional do loop for para percorrer um ARRAY
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

// Criando um ARRAY de valores numéricos
let valores = [1, 2, 3, 4, 7, 10];

// Versão mais simples e otimizada usando for...in para percorrer o ARRAY
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}