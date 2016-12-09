<?php
include("../../config/db.php");

$sources = "";
$rationales = "";

$json = file_get_contents("php://input");
$json = json_decode($json, true);

//Create Strings to save source order and rationale
foreach($json["sources"] as $source) {
    $sources .= $source["id"]."|";
    $rationales .= $source["rationale"]."|";
}

//Check if ID exists
$checkSql = "SELECT * FROM it_activity_data WHERE id='".$json["id"]."'";
$checkExist = $conn->query($checkSql);

if($checkExist->num_rows == 0) {
    $saveSql = "INSERT INTO it_activity_data VALUES ('".$json["id"]."', '".$json["activity"]."', '".$sources."', '".$rationales."', CURRENT_TIMESTAMP)";
} else {
    //TODO: Actually create a check for final step instead of assuming completion of step 2 will always insert new row
    $saveSql = "UPDATE it_activity_data SET source_order_final='".$sources."', source_rationales_final='".$rationales."' WHERE id='".$json["id"]."'";
}
$result = $conn->query($saveSql);
?>
