<?php
$json = file_get_contents(dirname(dirname(getcwd()))."/config/config.json");
echo($json);
?>
