<?php

header('Access-Control-Allow-Origin: *');

require_once(__DIR__."/../private/Search.php");

if(isset($_GET['q']))
{
    $searchInstance = new Search();
    echo json_encode($searchInstance->search($_GET['q']));
}
else 
{
    exit;
}