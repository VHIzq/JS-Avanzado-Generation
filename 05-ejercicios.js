function operaciones(){
  num1 = parseInt(prompt("Ingresa el primer número"));
  num2 = parseInt(prompt("Ingresa el segundo número"));
  let sumaRes;
  let difRes; 
  let prodRes;
  let divRes;
  if(num1 > num2){
    sumaRes = num1 + num2;
    difRes = num1 - num2;
    document.write(`La suma de los  dígitos es ${sumaRes}, su diferencia es ${difRes}`);
  }else{
    prodRes = num1 * num2;
    divRes = num2 / num1;
    document.write(`El producto de los dígitos es ${prodRes} y su cociente es ${divRes}`);
  }
  console.log(sumaRes, difRes, prodRes, divRes);
}
operaciones();