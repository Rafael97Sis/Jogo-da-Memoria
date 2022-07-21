function validaArray(arr, num) {

  try {
    if (!arr && !num) throw new ReferenceError("Enviar os Parametros");

    if (typeof arr !== "object") throw new TypeError("Array precisa ser do tipo object");

    if (typeof num !== "number") throw new TypeError("Array precisa ser do tipo Numerico");

    if (arr.length !== num) throw new RangeError('Tamanho Invalido!');

    return arr;
  } catch (e) {

    if (e instanceof ReferenceError) {
      console.log("Este erro é ReferenceError !")
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log("Este erro é TypeError !")
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log("Este erro é RangerError !")
      console.log(e.message)
    } else {
      console.log("Tipo de Erro não esperado" + e)
    }
  }
}

console.log(validaArray([1, 2, 3, 4, 5, 6, 7], 7));