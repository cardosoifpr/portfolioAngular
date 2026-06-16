<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../conexao.php';

$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
$sql =  $pdo->prepare("SELECT * FROM projetos WHERE id = :id AND status = 'publicado' LIMIT 1");
$sql->execute([':id' => $id]);
$detalhe = $sql->fetch();

echo json_encode($detalhe);
?>