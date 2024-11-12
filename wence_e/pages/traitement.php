<?php

$servername = "localhost";
$username = "root";
$password = "";

try {
    $access=new pdo("mysql:host=localhost;dbname=wence_users;charset=utf8", "root", "");
    
    $access->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

} catch (Exception $e) 
{
$e->getMessage();
}

if(isset($_POST['forfait'])){
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $message = $_POST['message'];

    $requete = $access->prepare("INSERT INTO users VALUES (0, :nom, :prenom, :email, :telephone, :message)");
    $requete->execute(
        array(
            'nom' => $nom,
            'prenom' => $prenom,
            'email' => $email,
            'telephone' => $telephone,
            'message' => $message
        )
    );
    header("location: merci.html");
    

}






