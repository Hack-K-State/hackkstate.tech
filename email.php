<?php
$url = 'https://api.sendgrid.com/v3/contactdb/recipients';
$apikey = '';
$params = array(
  'email' => $_POST['email'],
);
$json_post_fields = '['.json_encode($params).']';

$ch = curl_init();
$headers =
array("Content-Type: application/json",
"Authorization: Bearer ".$apikey);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 60);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POSTFIELDS, $json_post_fields);
$data = curl_exec($ch);
$success = 'Signup Failed';
if (!curl_errno($ch)) {
    $success = 'Signup Success';
}
echo $success;
