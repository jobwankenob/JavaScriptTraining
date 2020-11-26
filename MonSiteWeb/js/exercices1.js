"use strict"

function texteComplet() {
    var var1 = 'Star Wars est la plus belle création du monde';
    var var2 = 'Game Of Thrones ne déclasse pas Star Wars';
    var var3 = 'The Expanse est un sous produit de faible qualité comparativement à Star Wars';
    var texteComplet;
    var texteComplet = var1 + var2 + var3

    if (texteComplet.length > 100) {
        alert("Ceci est une grande phrase");
    } else {
        alert("Ceci est une petite phrase");
    }
}
console.log(texteComplet.length)
