
var nombre = prompt("Como te llamas ? ");
var coche1 = prompt("Cual Fue tu primer coche ? ");
var coche2 = prompt("Despues cual fue tu segundo coche ? ");
var coche3 = prompt("Finalmente cual fue tu tercer coche ? ");

var usuario = {
    nombre : nombre,
    coche1 : coche1,
    coche2 : coche2,
    coche3 : coche3
};
console.log(usuario);

document.write( "Tu nombre es " + nombre + ", tu primer coche fue un " + coche1 + ", despues as tenido un " + coche2 + ", y por ultimo tienes un " + coche3 + ".");
