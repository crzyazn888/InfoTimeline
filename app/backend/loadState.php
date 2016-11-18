<?php
include("../../config/db.php");

if(!isset($_GET["id"]) || $_GET["id"] == "") {
    http_response_code(404);
}

//Check if ID exists
$checkSql = "SELECT * FROM it_user_state WHERE id='".$_GET["id"]."'";
$result = $conn->query($checkSql);

if($result->num_rows == 1) {
    $row = $result->fetch_assoc();

    $returnJson = array();
    $returnJson["step"] = $row["current_step"];
    $returnJson["activity"] = $row["activity_folder"];

    echo json_encode($returnJson);
}
?>
