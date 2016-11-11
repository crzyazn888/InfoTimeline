<?php
if(isset($_GET['download']) && $_GET['download'] == 1) {
    $json = file_get_contents(getcwd()."/config.json");
    header('Content-disposition: attachment; filename=config.json');
    header('Content-type: application/json');
    echo($json);
    //echo('<script language="JavaScript">window.close();</script>');
} else if(isset($_GET['load']) && $_GET['load'] == 1) {
    if(!file_exists(getcwd()."/config.json")) {
        http_response_code(404);
    }
    $json = file_get_contents(getcwd()."/config.json");
    echo($json);
} else {
    $rest_json = file_get_contents("php://input");
    file_put_contents(getcwd()."/config.json", $rest_json);
    echo("Saved to config.json");
    //$_POST = json_decode($rest_json, true);
    //var_dump(json_encode($_POST, JSON_UNESCAPED_SLASHES));
}
?>
