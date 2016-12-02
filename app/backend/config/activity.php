<?php
if(isset($_GET['download']) && $_GET['download'] == 1) {
    $json = file_get_contents(getcwd()."/Topic.json");
    header('Content-disposition: attachment; filename=Topic.json');
    header('Content-type: application/json');
    echo($json);
    //echo('<script language="JavaScript">window.close();</script>');
} else {
    unlink(getcwd()."/Topic.json");
    $rest_json = file_get_contents("php://input");
    file_put_contents(getcwd()."/Topic.json", $rest_json);
    echo("Saved to Topic.json");
    //$_POST = json_decode($rest_json, true);
    //var_dump(json_encode($_POST, JSON_UNESCAPED_SLASHES));
}
?>
