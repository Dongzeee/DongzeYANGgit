
//1
function addition() {
    let b = Number(prompt("Donner moi un nombre "));
    let c = Number(prompt("Donner moi un deuxième nombre"));
  
    let add = c + b;
    document.getElementById("output").innerHTML = add;
  }

function showCode() {
    var code = `
      <pre>
    let b = Number(prompt("Donner moi un nombre "));
    let c = Number(prompt("Donner moi un deuxième nombre"));
  
    let add = c + b;
    document.getElementById("output").innerHTML = add;
      </pre>
    `;
    document.getElementById("output").innerHTML = code;
  }

//2
  function afficherNombres() {
    let resultat = "";
    for (let i = 1; i <= 10; i++) {
        resultat += i + " ";
    }
    document.getElementById("output2").innerText = resultat;
}


function showCode2() {
    var code = `
      <pre>
    function afficherNombres() {
    let resultat = "";
    for (let i = 1; i <= 10; i++) {
        resultat += i + " ";
    }
    document.getElementById("resultat").innerText = resultat;
        }
      </pre>
    `;
    document.getElementById("output2").innerHTML = code;
  }
  
//3
let a = 5;
let b = 10;

function plusGrand() {
    let b = Number(prompt("Donner moi un nombre"));
    let c = Number(prompt("Donner moi un deuxième nombre"));

    let grand = b > c ? b : c;
    document.getElementById("output3").innerHTML = "Le plus grand nombre est : " + grand;
}

function showCode3() {
    var code = `
      <pre>
function plusGrand() {
    let b = Number(prompt("Donner moi un nombre"));
    let c = Number(prompt("Donner moi un deuxième nombre"));

    let grand = b > c ? b : c;
    document.getElementById("output3").innerHTML = "Le plus grand nombre est : " + grand;
}
      </pre>
    `;
    document.getElementById("output3").innerHTML = code;
  }

//4

function convertirCelsiusEnFahrenheit() {
    let celsius = Number(prompt("Donner la température en Celsius"));
    let fahrenheit = (celsius * 9/5) + 32; // Formule pour la conversion
    document.getElementById("output4").innerHTML = celsius + "°C équivaut à " + fahrenheit + "°F";
}

function showCode4() {
    var code = `
      <pre>
function convertirCelsiusEnFahrenheit() {
    let celsius = Number(prompt("Donner la température en Celsius"));
    let fahrenheit = (celsius * 9/5) + 32; // Formule pour la conversion
    document.getElementById("output4").innerHTML = celsius + "°C équivaut à " + fahrenheit + "°F";
}
      </pre>
    `;
    document.getElementById("output4").innerHTML = code;
  }


//5

function genererMotDePasse() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let motDePasse = "";
    
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres[randomIndex];
    }
    
    document.getElementById("output5").innerHTML = "Mot de passe généré : " + motDePasse;
}

function showCode5() {
    var code = `
      <pre>
function genererMotDePasse() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let motDePasse = "";
    
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres[randomIndex];
    }
    
    document.getElementById("output5").innerHTML = "Mot de passe généré : " + motDePasse;
}
      </pre>
    `;
    document.getElementById("output5").innerHTML = code;
  }


//6

function pgcd() {
    let a = Number(prompt("Donner le premier nombre"));
    let b = Number(prompt("Donner le deuxième nombre"));

    // Algorithme d'Euclide pour calculer le PGCD
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    document.getElementById("output6").innerHTML = "Le PGCD de ces deux nombres est : " + a;
}

function showCode6() {
    var code = `
      <pre>

    function pgcd() {
        let a = Number(prompt("Donner le premier nombre"));
        let b = Number(prompt("Donner le deuxième nombre"));
    
        // Algorithme d'Euclide pour calculer le PGCD
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
    
        document.getElementById("output6").innerHTML = "Le PGCD de ces deux nombres est : " + a;
    }
      </pre>
    `;
    document.getElementById("output6").innerHTML = code;
  }

//7

function lancerDes() {
    let de1 = Math.floor(Math.random() * 6) + 1; // Lancer du premier dé (entre 1 et 6)
    let de2 = Math.floor(Math.random() * 6) + 1; // Lancer du deuxième dé (entre 1 et 6)
    
    let somme = de1 + de2; // Calcul de la somme des deux dés
    document.getElementById("output7").innerHTML = "Le résultat du lancer des deux dés est : " + de1 + " et " + de2 + ". La somme est : " + somme;
}

function showCode7() {
    var code = `
      <pre>

function lancerDes() {
    let de1 = Math.floor(Math.random() * 6) + 1; // Lancer du premier dé (entre 1 et 6)
    let de2 = Math.floor(Math.random() * 6) + 1; // Lancer du deuxième dé (entre 1 et 6)
    
    let somme = de1 + de2; // Calcul de la somme des deux dés
    document.getElementById("output7").innerHTML = "Le résultat du lancer des deux dés est : " + de1 + " et " + de2 + ". La somme est : " + somme;
}
      </pre>
    `;
    document.getElementById("output7").innerHTML = code;
  }

//8

function estBissextile() {
    let annee = Number(prompt("Entrez une année"));

    // Une année est bissextile si elle est divisible par 4,
    // mais si elle est divisible par 100, elle doit aussi être divisible par 400
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        document.getElementById("output8").innerHTML = annee + " est une année bissextile.";
    } else {
        document.getElementById("output8").innerHTML = annee + " n'est pas une année bissextile.";
    }
}

function showCode8() {
    var code = `
      <pre>

function estBissextile() {
    let annee = Number(prompt("Entrez une année"));

    // Une année est bissextile si elle est divisible par 4,
    // mais si elle est divisible par 100, elle doit aussi être divisible par 400
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        document.getElementById("output8").innerHTML = annee + " est une année bissextile.";
    } else {
        document.getElementById("output8").innerHTML = annee + " n'est pas une année bissextile.";
    }
}
      </pre>
    `;
    document.getElementById("output8").innerHTML = code;
  }

//9

function trierListe() {
    let liste = prompt("Entrez une liste de nombres séparés par des virgules").split(",").map(Number); // Récupère la liste et la transforme en tableau de nombres
    
    // Trie la liste par ordre croissant
    liste.sort((a, b) => a - b);
    
    document.getElementById("output9").innerHTML = "Liste triée : " + liste.join(", ");
}

function showCode9() {
    var code = `
      <pre>


      function trierListe() {
        let liste = prompt("Entrez une liste de nombres séparés par des virgules").split(",").map(Number); // Récupère la liste et la transforme en tableau de nombres
        
        // Trie la liste par ordre croissant
        liste.sort((a, b) => a - b);
        
        document.getElementById("output9").innerHTML = "Liste triée : " + liste.join(", ");
    }
      </pre>
    `;
    document.getElementById("output9").innerHTML = code;
  }

//10

function sommeChiffres() {
    let nombre = prompt("Entrez un nombre");

    // Convertir le nombre en chaîne de caractères et puis en tableau pour accéder à chaque chiffre
    let somme = 0;
    
    // Parcourir chaque caractère du nombre (chaîne) et l'ajouter à la somme
    for (let chiffre of nombre) {
        somme += Number(chiffre); // Convertir chaque caractère en nombre et l'ajouter à la somme
    }

    document.getElementById("output10").innerHTML = "La somme des chiffres est : " + somme;
}

function showCode10() {
    var code = `
      <pre>

function sommeChiffres() {
    let nombre = prompt("Entrez un nombre");

    // Convertir le nombre en chaîne de caractères et puis en tableau pour accéder à chaque chiffre
    let somme = 0;
    
    // Parcourir chaque caractère du nombre (chaîne) et l'ajouter à la somme
    for (let chiffre of nombre) {
        somme += Number(chiffre); // Convertir chaque caractère en nombre et l'ajouter à la somme
    }

    document.getElementById("output10").innerHTML = "La somme des chiffres est : " + somme;
}
      </pre>
    `;
    document.getElementById("output10").innerHTML = code;
  }

//11

function genererFibonacci() {
    let n = Number(prompt("Entrez un nombre pour générer la suite de Fibonacci jusqu'à ce nombre"));

    let fibo = [0, 1]; // Les deux premiers nombres de la suite

    // Générer la suite jusqu'à ce que le dernier nombre soit supérieur ou égal à n
    while (fibo[fibo.length - 1] + fibo[fibo.length - 2] <= n) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
    }

    document.getElementById("output11").innerHTML = "Suite de Fibonacci jusqu'à " + n + " : " + fibo.join(", ");
}

function showCode11() {
    var code = `
      <pre>
      
function genererFibonacci() {
    let n = Number(prompt("Entrez un nombre pour générer la suite de Fibonacci jusqu'à ce nombre"));

    let fibo = [0, 1]; // Les deux premiers nombres de la suite

    // Générer la suite jusqu'à ce que le dernier nombre soit supérieur ou égal à n
    while (fibo[fibo.length - 1] + fibo[fibo.length - 2] <= n) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
    }

    document.getElementById("output11").innerHTML = "Suite de Fibonacci jusqu'à " + n + " : " + fibo.join(", ");
}
      </pre>
    `;
    document.getElementById("output11").innerHTML = code;
  }



//12

function rendreMonnaie() {
    let montant = Number(prompt("Entrez un montant à rendre en monnaie (en euros)"));
    
    // Définition des billets et pièces disponibles
    let valeurs = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let rendu = {};

    // Calcul du rendu de monnaie
    for (let i = 0; i < valeurs.length; i++) {
        if (montant >= valeurs[i]) {
            let nombreBillets = Math.floor(montant / valeurs[i]); // Nombre de billets/pièces de la valeur actuelle
            rendu[valeurs[i]] = nombreBillets;
            montant = (montant - nombreBillets * valeurs[i]).toFixed(2); // Soustraction du montant rendu
        }
    }

    // Affichage du rendu
    let result = "Monnaie à rendre :<br>";
    for (let key in rendu) {
        result += `${rendu[key]} x ${key} €<br>`;
    }

    document.getElementById("output12").innerHTML = result;
}

function showCode12() {
    var code = `
      <pre>
      
function rendreMonnaie() {
    let montant = Number(prompt("Entrez un montant à rendre en monnaie (en euros)"));
    
    // Définition des billets et pièces disponibles
    let valeurs = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let rendu = {};

    // Calcul du rendu de monnaie
    for (let i = 0; i < valeurs.length; i++) {
        if (montant >= valeurs[i]) {
            let nombreBillets = Math.floor(montant / valeurs[i]); // Nombre de billets/pièces de la valeur actuelle
            rendu[valeurs[i]] = nombreBillets;
            montant = (montant - nombreBillets * valeurs[i]).toFixed(2); // Soustraction du montant rendu
        }
    }

    // Affichage du rendu
    let result = "Monnaie à rendre :<br>";
    for (let key in rendu) {
      </pre>
    `;
    document.getElementById("output12").innerHTML = code;
  }


//13

function verifierEmail() {
    let email = prompt("Entrez votre adresse e-mail");

    // Vérification de la présence de "@" et "."
    if (email.includes("@") && email.includes(".")) {
        document.getElementById("output13").innerHTML = "L'adresse e-mail est valide.";
    } else {
        document.getElementById("output13").innerHTML = "L'adresse e-mail n'est pas valide. Assurez-vous qu'elle contient '@' et '.'";
    }
}

function showCode13() {
    var code = `
      <pre>
      
function verifierEmail() {
    let email = prompt("Entrez votre adresse e-mail");

    // Vérification de la présence de "@" et "."
    if (email.includes("@") && email.includes(".")) {
        document.getElementById("output13").innerHTML = "L'adresse e-mail est valide.";
    } else {
        document.getElementById("output13").innerHTML = "L'adresse e-mail n'est pas valide. Assurez-vous qu'elle contient '@' et '.'";
    }
}

      </pre>
    `;
    document.getElementById("output13").innerHTML = code;
  }


//14

function plusPetit() {
    let a = Number(prompt("Entrez le premier nombre"));
    let b = Number(prompt("Entrez le deuxième nombre"));

    let petit = a < b ? a : b; // Utilisation de l'opérateur ternaire pour déterminer le plus petit
    document.getElementById("output14").innerHTML = "Le plus petit nombre est : " + petit;
}

function showCode14() {
    var code = `
      <pre>
      
function plusPetit() {
    let a = Number(prompt("Entrez le premier nombre"));
    let b = Number(prompt("Entrez le deuxième nombre"));

    let petit = a < b ? a : b; // Utilisation de l'opérateur ternaire pour déterminer le plus petit
    document.getElementById("output14").innerHTML = "Le plus petit nombre est : " + petit;
}

      </pre>
    `;
    document.getElementById("output14").innerHTML = code;
  }


//15

function verifierSigne() {
    let nombre = Number(prompt("Entrez un nombre"));

    if (nombre > 0) {
        document.getElementById("output15").innerHTML = "Le nombre est positif.";
    } else if (nombre < 0) {
        document.getElementById("output15").innerHTML = "Le nombre est négatif.";
    } else {
        document.getElementById("output15").innerHTML = "Le nombre est nul.";
    }
}

function showCode15() {
    var code = `
      <pre>
      
function verifierSigne() {
    let nombre = Number(prompt("Entrez un nombre"));

    if (nombre > 0) {
        document.getElementById("output15").innerHTML = "Le nombre est positif.";
    } else if (nombre < 0) {
        document.getElementById("output15").innerHTML = "Le nombre est négatif.";
    } else {
        document.getElementById("output15").innerHTML = "Le nombre est nul.";
    }
}

      </pre>
    `;
    document.getElementById("output15").innerHTML = code;
  }