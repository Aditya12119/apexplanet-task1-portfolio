<?php

if (isset($_GET["username"])) {

    $name = htmlspecialchars($_GET["username"]);

    echo "Welcome " . $name;

}

?>