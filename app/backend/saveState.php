<?php
include("../../config/db.php");
$json = file_get_contents("php://input");
$json = json_decode($json, true);

//Check if ID exists
$checkSql = "SELECT * FROM it_user_state WHERE id='".$json["id"]."'";
$checkExist = $conn->query($checkSql);

if($checkExist->num_rows == 0) {
    $saveSql = "INSERT INTO it_user_state VALUES ('".$json["id"]."', '".$json["activity"]."', ".$json["step"].", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";
} else {
    $saveSql = "UPDATE it_user_state SET current_step=".$json["step"]." WHERE id='".$json["id"]."'";
}
$result = $conn->query($saveSql);
?>
