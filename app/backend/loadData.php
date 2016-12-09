<?php
include("../../config/db.php");

if(!isset($_GET["id"]) || $_GET["id"] == "") {
    http_response_code(404);
}
if(isset($_GET["compare"]) && $_GET["compare"] == 1) {
    if(isset($_GET["correct"]) && $_GET["correct"] == 1) {
        $randExample = "correctOrder";
    } else {
        $randExample = "exampleOrder".rand(1,3);
    }
}

$returnJson = array();

//Load Results
$loadSql = "SELECT * FROM it_activity_data WHERE id='".$_GET["id"]."' LIMIT 1";
$loadResult = $conn->query($loadSql);

if($loadResult->num_rows == 1) {
    $row = $loadResult->fetch_assoc();
    //Load Activity JSON
    $json = file_get_contents("../../data/".$row["activity"]."/Topic.json");
    $json = json_decode($json, true);

    //Rationale and Source order
    if(isset($_GET["final"]) && $_GET["final"] == 1) {
        $rationales = explode("|", $row["source_rationales_final"]);
        $order = explode("|", $row["source_order_final"]);
    } else {
        $rationales = explode("|", $row["source_rationales"]);
        $order = explode("|", $row["source_order"]);
    }

    //Generate sources
    foreach($order as $key=>$value) {
        if($value != "") {
            $source = array();
            $source["id"] = $value;
            $source["rationale"] = $rationales[$key];
            foreach($json["sources"] as $activitySourceList) {
                if($activitySourceList["id"] == $value) {
                    $source["path"] = $activitySourceList["path"];
                    $source["notes"] = $activitySourceList["notes"];
                }
                if(isset($randExample) && $activitySourceList["id"] == $json[$randExample][$key]["id"]) {
                    $source["exPath"] = $activitySourceList["path"];
                    $source["exNotes"] = $activitySourceList["notes"];
                    $source["exRationale"] = $json[$randExample][$key]["rationale"];
                }
            }
            $returnJson[] = $source;
        }
    }
    echo json_encode($returnJson);
}
?>
