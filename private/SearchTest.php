<?php


$string = file_get_contents(__DIR__."/data/coronafactchecks_en.json");
        $json_a = json_decode($string, true);

var_dump($json_a['claims'][0]);
exit;

require_once("Search.php");




$si = new Search();

$a = $si->search('asd1');

var_dump($a);