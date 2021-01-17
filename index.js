var args = process.argv.slice(2)

var operador = args[1];
var valor1 = parseInt(args[0]);
var valor2 = parseInt(args[2]);

var result = "Digite números válidos";
suma = (a,b) => a+b ;
resta = (a,b) => a-b;
multiplicacion = (a,b) => a*b ;
division = (a,b) => a/b ;


if(args.length == 3){
    switch(operador){
        case '+':
            result = "SUMA: " + suma(valor1,valor2);
            break;

        case "-":
            if(valor1>valor2)
            result = "RESTA: " + resta(valor1,valor2);
            break;
        
        case "*":
            result = "MULTIPLICACION: " + multiplicacion(valor1,valor2);
            break;    
        
        case "/":
            if(valor2!=0)
            result = "DIVISION: " + division(valor1,valor2);
            break;
        }
}

console.log(result);