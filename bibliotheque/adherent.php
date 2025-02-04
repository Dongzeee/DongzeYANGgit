<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 20px;
        }

        table {
            border-collapse: collapse;
            width: 80%;
            margin: 20px auto;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        th, td {
            border: 1px solid #ddd;
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #007BFF;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        a {
            display: inline-block;
            margin: 20px auto;
            text-align: center;
            text-decoration: none;
            color: white;
            background-color: #007BFF;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        a:hover {
            background-color: #0056b3;
        }

        center {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    </style>
<html>
    <body>
    <center>
        <?php
        @include("connexion.php");
        $requete="select * from adherents";
        $resultat=mysqli_query($conn,$requete);
        ?>
        <table border="1">
            <tr><td>ID</td><td>Nom</td><td>Prenom</td><td>Date de Naissance</td><td>Date d'adhesion</td><td>Adresse</td><td>Numero tel</td><td>Mail</td></tr>
            <?php while($enreg=mysqli_fetch_array($resultat))
            {?>
            <tr>
            <td><?php echo $enreg["ID_Adherent"];?></td>
            <td><?php echo $enreg["Nom"];?></td>
            <td><?php echo $enreg["Prenom"];?></td>
            <td><?php echo $enreg["Date_naissance"];?></td>
            <td><?php echo $enreg["Date_adhesion"];?></td>
            <td><?php echo $enreg["Adresse"];?></td>
            <td><?php echo $enreg["Num_tel"];?></td>
            <td><?php echo $enreg["mail"];?></td>
            </tr>
            <?php }?>
        </table>
        <a href="index.html">Retour</a>
        </center>
        <?php
        mysqli_close($conn);?>
    </body>
</html>