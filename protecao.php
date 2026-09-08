<?php

if (!isset($_SESSION["id_jogador"])) {
    session_start();
}
else {
    if (!isset($_SESSION["id_jogador"])) {
        header("Location: index.php");
        exit;
    }
}

?>