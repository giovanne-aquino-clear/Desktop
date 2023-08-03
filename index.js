console.log("ola");

let a= 10;
const b= 20;

console.log(a==b);
console.log (a!=b);
console.log(a===b);

var cor = "verde";

if( cor === "verde")
{  console.log("sucesso"); }

else
{
console.log("sucesso")
}

let t= 5
 for (let i = 0; i <=10; i++ )
 console.log(`${i} X ${t} = ${i*t}`);

 function calc (x1, x2, operator){

    return eval (`${x1} ${operator} ${x2}`);

    



 }
 let resultado = calc(-1,0,"+")

if (resultado>=0)
    console.log(resultado);
    else 
    console.log("menor que zero");

    window.addEventListener('focus', event => { 
        console.log("focus");
    });
    window.addEventListener('click', event => { 
        console.log("click");
    });
    let agora = new Date();

    console.log(agora.toLocaleDateString("pt-BR"));

    let numeros = [1,2,3,4,5,6];

     numeros.forEach(index,v    alue);