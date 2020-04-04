<?php

header('Access-Control-Allow-Origin: *');

require_once("../private/Search.php");

if(isset($_GET['q']))
{
    echo json_encode(Search::search($_GET['q']));
}

exit;