function test_age(){
    let age = prompt ("Quelle est votre âge ?")
    if (age < 18){
        document.write("Vous êtes mineur");
        document.body.style.backgroundColor="red";
    }
    else {
        document.write("Vous êtes majeur");
        document.body.style.backgroundColor="green";
    }
}


function calcul_moyenne(){
    var n1 = prompt("Donner la premiere note:");
    var n2 = prompt("Donner la deuxième note:");
    var n3 = prompt("Donner la troisième note:");

    var somme= Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme :" + somme + "<br>");
    var moyenne= somme/3;

    document.write ("Voici la moyenne: " + moyenne + "<br>");

    if(moyenne>10){
        document.write("Vous êtes pas admis");
        document.body.style.backgroundColor="green";
    }
    else {
        document.write("Vous êtes admis");
        document.body.style.backgroundColor="red";
    }


    if(moyenne<0){
        document.write("Moyenne invalide"+"<hr>");
    }
    if(moyenne<20){
        document.write("Moyenne invalide"+"<hr>");
    }
    if(moyenne<10){
        document.write("Vous êtes redoublant"+"<hr>");
    }
    if(moyenne<14){
        document.write("passable"+"<hr>");
    }
    if(moyenne>14){
        document.write("mention bien"+"<hr>")
    }


}

function test_couleur(){
    let couleur = prompt("Donner une couleur");
    if (couleur =="rouge" || couleur == "red"){
        document.body.style.backgroundColor ="red";
    }
    else if(couleur == "bleu" || couleur =="Blue"){
        document.body.style.backgroundColor ="blue"
    }
    else if(couleur == "vert" || couleur == "green"){
        document.body.style.backgroundColor= "green"
    }
    else if (couleur =="rose" || couleur == "pink"){
        document.body.style.backgroundColor="pink"
    }
    else if (couleur =="jaune" || couleur == "yellow"){
        document.body.style.backgroundColor="yellow"
    }
    else if (couleur =="marron" || couleur == "brown"){
        document.body.style.backgroundColor="brown"
    }
    else if (couleur =="bleuc" || couleur == "lightblue"){
        document.body.style.backgroundColor="lightblue"
    }
    else{
        alert("Couleur non comprise")
    }
}


