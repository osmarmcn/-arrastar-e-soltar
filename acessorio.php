<?php

include_once "conexao.php";

$acessorio_id = filter_input(INPUT_POST, "acessorio_id", FILTER_DEFAULT);
$carro_id = filter_input(INPUT_POST, "carro_id", FILTER_DEFAULT);

$query_acessorio = "INSERT INTO carros_acessorios (acessorio_id, carro_id) VALUES (:acessorio_id, :carro_id)";

$cad_acessorio = $conn->prepare($query_acessorio);
$cad_acessorio->bindParam(':acessorio_id', $acessorio_id);
$cad_acessorio->bindParam(':carro_id', $carro_id);

if($cad_acessorio->execute()){
    echo json_encode(['status' => true, 'mensagem' =>'Acessório salvo!', 'acessorio_id'=> $acessorio_id]);
}else{
    echo json_encode(['status' => false, 'mensagem' =>'Erro! Acessório não salvo!']);
}

