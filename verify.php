<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if (isset($_POST) && isset($_POST['g-token'])) {
    $secretKey = '6Ld0pmAqAAAAAP7F-_RCjg9H-Qg-iSsEZkVl_3w7';
    $token = $_POST['g-token'];
    $ip = $_SERVER['REMOTE_ADDR'];

    $url = "https://www.google.com/recaptcha/api/siteverify";
    $data = array(
        'secret' => $secretKey,
        'response' => $token,
        'remoteip' => $ip
    );
    
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    
    $context  = stream_context_create($options);
    $request = file_get_contents($url, false, $context);
    $response = json_decode($request);

    if ($response->success && $response->action == 'submit' && $response->score >= 0.5) {
        header('HTTP/1.1 200 OK');
    } else {
        header('HTTP/1.1 401 Unauthorized');
    }
    
    echo json_encode($response);
    exit();
} 
?>