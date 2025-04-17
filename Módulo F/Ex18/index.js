let valores = []

function adicionar() {
  let num = Number(document.getElementById('numero').value)
  let lista = document.getElementById('lista')
  let res = document.getElementById('resultado')

  if (num >= 1 && num <= 100) {
    if (valores.includes(num)) {
      alert('Valor já adicionado!')
    } else {
      valores.push(num)

      let item = document.createElement('option')
      item.text = `Valor ${num} adicionado`
      lista.appendChild(item)

      res.innerHTML = ''
    }
  } else {
    alert('Digite um número entre 1 e 100!')
  }

  document.getElementById('numero').value = ''
  document.getElementById('numero').focus()
}

function finalizar() {
  if (valores.length == 0) {
    alert('Adicione valores primeiro!')
    return
  }

  let total = valores.length
  let maior = valores[0]
  let menor = valores[0]
  let soma = 0

  for (let valor of valores) {
    soma += valor
    if (valor > maior) maior = valor
    if (valor < menor) menor = valor
  }

  let media = soma / total

  let res = document.getElementById('resultado')
  res.innerHTML = `
    <p>Ao todo, temos ${total} números cadastrados.</p>
    <p>O maior valor informado foi ${maior}.</p>
    <p>O menor valor informado foi ${menor}.</p>
    <p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores digitados é ${media}</p>
  `
}
