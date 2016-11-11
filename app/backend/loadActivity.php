<?php
if(isset($_GET["folder"])) {
    $json = file_get_contents(dirname(dirname(getcwd()))."/data/".$_GET["folder"]."/Topic.json");
    echo($json);
} else {
    http_response_code(404);
}
?>
