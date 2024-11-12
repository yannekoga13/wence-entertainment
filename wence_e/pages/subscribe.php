<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer l'email de l'utilisateur
    $email = $_POST['email'];

    // Valider l'email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Connexion à la base de données (ajuste les paramètres selon ton environnement)
        $host = 'localhost';
        $dbname = 'newsletter_db';
        $username = 'root';
        $password = '';

        try {
            $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Préparer et exécuter la requête d'insertion
            $stmt = $pdo->prepare("INSERT INTO subscribers (email) VALUES (:email)");
            $stmt->bindParam(':email', $email);
            $stmt->execute();

            echo "Merci de vous être inscrit à notre newsletter !";
        } catch (PDOException $e) {
            echo "Erreur de connexion à la base de données : " . $e->getMessage();
        }
    } else {
        echo "Adresse email invalide.";
    }
} else {
    echo "Méthode de requête non supportée.";
}

