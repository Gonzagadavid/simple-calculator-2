(function () {
  'use strict'

  const zero = document.getElementById('zero')
  const one = document.getElementById('one')
  const two = document.getElementById('two')
  const three = document.getElementById('three')
  const four = document.getElementById('four')
  const five = document.getElementById('five')
  const six = document.getElementById('six')
  const seven = document.getElementById('seven')
  const eight = document.getElementById('eight')
  const nine = document.getElementById('nine')
  const sum = document.getElementById('sum')
  const subtraction = document.getElementById('subtraction')
  const division = document.getElementById('division')
  const multiplication = document.getElementById('multiplication')
  const viewFinder = document.getElementById('viewFinder')
  const clear = document.getElementById('clear')
  const equal = document.getElementById('equal')
  const add = (a, b) => a + b
  const subtract = (a, b) => a - b
  const share = (a, b) => a / b
  const multiplicar = (a, b) => a * b
  let operacao = ''
  let inicial = ''
  let number = ''

  addEventNum(zero, '0')
  addEventNum(one, '1')
  addEventNum(two, '2')
  addEventNum(three, '3')
  addEventNum(four, '4')
  addEventNum(five, '5')
  addEventNum(six, '6')
  addEventNum(seven, '7')
  addEventNum(eight, '8')
  addEventNum(nine, '9')
  addEventOperacao(sum, add)
  addEventOperacao(subtraction, subtract)
  addEventOperacao(division, share)
  addEventOperacao(multiplication, multiplicar)

  clear.addEventListener('click', _ => {
    number = ''
    viewFinder.value = number
  })

  equal.addEventListener('click', eventIgual)
  function eventIgual () {
    const result = operacao(inicial, Number(number))
    number = result
    viewFinder.value = number
    operacao = ''
    inicial = ''
  }

  function addEventNum (num, str) {
    return num.addEventListener('click', _ => {
      number += str
      viewFinder.value = number
    })
  }

  function addEventOperacao (name, cb) {
    return name.addEventListener('click', _ => {
      if (inicial) eventIgual()
      operacao = cb
      inicial = Number(number)
      number = ''
    })
  }
})()
