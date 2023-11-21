<?php
if (isset($_GET['productName'])) {
    $productName = $_GET['productName'];
    $message = $_GET['message'];
    $pizzaSize = $_GET['pizzaSize'];
    
    // Tutaj możesz wykorzystać zmienne $productName i $productName2 w swoim skrypcie PHP
    echo "Otrzymano nazwę produktu: " . $productName . "<br>";
    echo "Otrzymano wartość z textarea: " . $message . "<br>";
    echo "Otrzymano wartość z pizzaSize: " . $pizzaSize . "<br>";
} else {
    echo "Brak przekazanych danych.";
}
?>
