function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.getElementById('txtano').value;
    const res = document.getElementById('msg');
    const img = document.getElementById('jovem'); // Substitua 'jovem' pelo ID correto da tag <img>
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    if (fano.length === 0 || fano > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        const idade = ano - fano;
        let imgSrc = '';

        if (sexo === 'masculino') {
            if (idade <= 12) {
                imgSrc = 'meninocrianca.jpeg'; // Menino criança
            } else if (idade <= 16) {
                imgSrc = 'meninoadolescente.jpeg'; // Menino adolescente
            } else if (idade <= 30) {
                imgSrc = 'jovem.PNG'; // Jovem homem
            } else if (idade <= 60) {
                imgSrc = 'homemadulto.webp'; // Homem adulto
            } else {
                imgSrc = 'idoso.webp'; // Homem idoso
            }
        } else if (sexo === 'feminino') {
            if (idade <= 12) {
                imgSrc = 'meninacrianca.jpeg'; // Menina criança
            } else if (idade <= 16) {
                imgSrc = 'meninaadolescente.webp'; // Menina adolescente
            } else if (idade <= 30) {
                imgSrc = 'jovem.webp'; // Jovem mulher
            } else if (idade <= 60) {
                imgSrc = 'mulheradulta.jpeg'; // Mulher adulta
            } else {
                imgSrc = 'idosa.jpg'; // Mulher idosa
            }
        }

        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`;
        img.src = imgSrc; // Atualiza a imagem exibida
    }
}