<?php

$cm = 0.01;
$ft = 0.3048;
$in = 0.0254;
$km = 1000;
$m = 1;
$mi = 1609.34;
$mm = 0.001;
$yd = 0.9144;

$value = trim($_POST['value']);
$from = ${$_POST['from']};
$to = ${$_POST['to']};

if (!is_numeric($value) && $value!="") {
    echo "<h4>Please put in numeric value</h4>";
}elseif($value == ""){
    echo "<h4>" . $value . "</h4>";
}
else {
    $converted = $from / $to * $value;
    echo "<h4 class=\"text-end\">" . round($converted,5) . "</h4>";
}
