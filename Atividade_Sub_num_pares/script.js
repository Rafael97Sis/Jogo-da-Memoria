function sub_pares(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("Aqui ja consta 0 !!");
    } else if (array[i] % 2 === 0) {
      console.log(`Substituindo ${array[i]} por 0.... `)
      array[i] = 0
    }

  }
  return array
}



let arr = [1, 4, 6, 0, 8, 55, 66]
console.log(sub_pares(arr))