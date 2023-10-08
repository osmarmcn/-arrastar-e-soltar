
<?php

$carro_id = 1;

?>







<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Arrastar e soltar valores</title>
</head>
<body>
    <h2 class="titulo">Cadastrar acessorios</h2>

    <span id="msg"></span>

    <span data-carro-id="<?php echo $carro_id; ?>" id="carroId"></span>

    <div class="areaDados">
        <h2>Disponivel</h2>
        <ul class="containerItem">
            <li draggable="true" class="itemArrastavel" data-acessorio-id="1">Ar-condiconado</li>
            <li draggable="true" class="itemArrastavel" data-acessorio-id="2">Vidro elétrico</li>
            <li draggable="true" class="itemArrastavel" data-acessorio-id="3">direção elétrica</li>
        </ul>

    </div>

    <div class="areaDados">
        <h2>Selecionados</h2>

        <ul class="containerItem">
        

            
        </ul>
    </div>



    <script src="js/custom.js"></script>
</body>
</html>