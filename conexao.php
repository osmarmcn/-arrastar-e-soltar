<?php




$host = "localhost";
$user = "root";
$pass = "123456";
$dbname = "teste";
$port = 3306;


try{
    $conn = new PDO("mysql:host=$host;dbname=" . $dbname, $user, $pass );

   // echo "conexão realizada com sucesso!";

}catch(PDOException $erro){
    echo "erro: conexão não realizada com sucesso" .$erro->getMessage();

}