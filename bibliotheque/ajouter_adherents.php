<?php
@include("connexion.php");

$a = $_POST["ID_Adherent"];
$b = $_POST["Nom"];
$c = $_POST["Prenom"];
$d = $_POST["Date_naissance"];
$e = $_POST["Date_adhesion"];
$f = $_POST["Adresse"];
$g = $_POST["Num_tel"];
$h = $_POST["mail"];

$req1 = "INSERT INTO adherents(ID_Adherent, Nom, Prenom, Date_naissance, Date_adhesion, Adresse, Num_tel, mail)
VALUES ('$a', '$b', '$c', '$d', '$e', '$f', '$g', '$h')";

if (mysqli_query($conn, $req1)) {
    echo '<center><p>Enregistrement effectue</p></center>';
} else {
    echo '<center><p>Erreur: ' . mysqli_error($conn) . '</p></center>';
}

echo '<center><a href="index.html">Retour</a></center>';

mysqli_close($conn);
?>