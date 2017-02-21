<?php
require_once('config.php');

$query = "SELECT * FROM wisata";
$result = $mysqli->query($query);

$response = array();

if($result->num_rows > 0) {

  while($rows = $result->fetch_assoc()) {
    $response[] = $rows;
  }

  echo json_encode($response);

} else {
  echo "nihil";
}

?>
