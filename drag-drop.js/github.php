<?
ini_set('display_errors', 1); 
error_reporting(E_ALL);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 

echo file_get_contents("http://github.com/clayendisk/dropsort.js");


?>
