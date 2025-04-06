function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = "imagens/fotomanha.jpg"
        document.body.style.background = 'rgb(250, 207, 143)'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = "imagens/fototarde.jpeg"
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE
        img.src = "imagens/fotonoite.jpeg"
        document.body.style.background = ''
    }
}
