<?php
include("../../config/db.php");

if(!isset($_GET["id"]) || $_GET["id"] == "") {
    http_response_code(404);
}

//Load Results
$loadSql = "SELECT * FROM it_activity_data WHERE id='".$_GET["id"]."' LIMIT 1";
$loadResult = $conn->query($loadSql);

header('Content-disposition: attachment; filename='.$_GET["id"].'.txt');
header('Content-type: text/plain');

if($loadResult->num_rows == 1) {
    $row = $loadResult->fetch_assoc();
} else {
    die("Could Not Find Data");
}

echo $row["id"]."\n";
echo $row["activity"]."\n";
echo "\n";
echo "Original Order and Rationale\n";
echo $row["source_order"]."\n";
echo $row["source_rationales"]."\n";
echo "\n";
echo "Updated Order and Rationale\n";
echo $row["source_order_final"]."\n";
echo $row["source_rationales_final"]."\n";
?>
