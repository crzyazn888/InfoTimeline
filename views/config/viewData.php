<?php
include("../../config/db.php");

//Load Results
$loadSql = "SELECT * FROM it_activity_data ORDER BY activity";
$loadResult = $conn->query($loadSql);
?>
<div layout="row" layout-align="center">
    <div class="page" flex-gt-sm="90" flex md-whiteframe="3" style="max-height: none;">
        <md-toolbar class="md-primary">
            <div class="md-toolbar-tools">
                View Responses
            </div>
        </md-toolbar>

        <div layout="row" layout-align="center">
            <table style="text-align: center; border-collapse: collapse; margin: auto; padding-top: 20px;">
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Activity
                        </th>
                        <th>
                            Source Order (Step 1)
                        </th>
                        <th>
                            Source Rationale (Step 1)
                        </th>
                        <th>
                            Final Source Order (Step 3)
                        </th>
                        <th>
                            Final Source Rationale
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <?php while($row = $loadResult->fetch_assoc()): ?>
                        <tr>
                            <td>
                                <?php echo $row["id"]; ?>
                            </td>
                            <td>
                                <?php echo $row["activity"]; ?>
                            </td>
                            <td>
                                <?php echo $row["source_order"]; ?>
                            </td>
                            <td>
                                <?php echo $row["source_rationales"]; ?>
                            </td>
                            <td>
                                <?php echo $row["source_order_final"]; ?>
                            </td>
                            <td>
                                <?php echo $row["source_rationales_final"]; ?>
                            </td>
                        </tr>
                    <?php endwhile; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
table tr td, table tr th {
    padding: 5px;
    border-bottom: 1px solid #000;
}
</style>
