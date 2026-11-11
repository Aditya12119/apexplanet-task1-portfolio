<?php

// Variables

$name = "Aaditya";

$age = 22;

echo "<h1>PHP Basics</h1>";

echo "Name: " . $name . "<br>";

echo "Age: " . $age . "<br>";


// If Else

$marks = 75;

if ($marks >= 40) {

    echo "Result: Pass<br>";

} else {

    echo "Result: Fail<br>";

}


// Indexed Array

$skills = ["HTML", "CSS", "JavaScript", "PHP"];

echo "<h2>My Skills</h2>";

foreach ($skills as $skill) {

    echo $skill . "<br>";

}


// Associative Array

$student = [

    "name" => "Aaditya",

    "course" => "MCA",

    "college" => "Bansal Institute"

];

echo "<h2>Student Details</h2>";

echo $student["name"] . "<br>";

echo $student["course"] . "<br>";

echo $student["college"] . "<br>";


// Function

function add($a, $b) {

    return $a + $b;

}

echo "Addition: " . add(10, 20);

?>