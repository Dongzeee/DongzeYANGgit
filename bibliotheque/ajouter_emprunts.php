<?php
@include("connexion.php");

$a = $_POST["ID_emprunt"];
$b = $_POST["Date_emprunt"];
$c = $_POST["Duree"];
$d = $_POST["ID_Adherent"];
$e = $_POST["Reference_livre"];

$req1 = "INSERT INTO emprunts(ID_emprunt, Date_emprunt, Duree, ID_Adherent, Reference_livre)
VALUES ('$a', '$b', '$c', '$d', '$e')";

if (mysqli_query($conn, $req1)) {
    echo '<center><p>Enregistrement effectue</p></center>';
} else {
    echo '<center><p>Erreur: ' . mysqli_error($conn) . '</p></center>';
}

echo '<center><a href="index.html">Retour</a></center>';

mysqli_close($conn);
?>