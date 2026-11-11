<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST["username"]);

    $email = htmlspecialchars($_POST["email"]);

    echo "<h2>Registration Details</h2>";

    echo "Name: " . $name . "<br>";

    echo "Email: " . $email;

}

?>