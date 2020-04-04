<?php

class Search {

    private $data = null;

    private function loadJson() {
        $string = file_get_contents(__DIR__."/data/coronafactchecks_en.json");
        $json_a = json_decode($string, true);

        $this->data = $json_a;
    }

    public function search($text) 
    {
        $this->loadJson();
        var_dump($this->data);
        return 'asd';
    }
}