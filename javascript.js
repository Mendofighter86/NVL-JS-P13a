var numerosPrimos=[];

function primo(numero) {
    for (var i=2; i<numero; i++){
        if (numero%i===0){
            return false; // La función te devuelve el primer return que alcance
        }
    }
    return true;
}
var n= parseInt(prompt("Elige hasta qué número quieres comprobar"));
for (j=2; j<n; j++){
    if (primo(j)){
        numerosPrimos.push(j);
    }
}
