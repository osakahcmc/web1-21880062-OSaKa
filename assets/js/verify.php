<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if (isset($_POST) && isset($_POST['g-token'])) {
    $secretKey = '6LdOO14qAAAAAKqPVXN1AR-gvtXGNzPOw1beTpFE';
    $token = $_POST['g-token'];
    $ip = $_SERVER['REMOTE_ADDR'];

    // Test the reCAPTCHA API with the secret key
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
    $result = file_get_contents($url, false, $context);
    $response = json_decode($result);

    if ($response === false) {
        // Error in API call
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(array('error' => 'Failed to contact reCAPTCHA API'));
    } elseif ($response->success && $response->action == 'submit' && $response->score >= 0.5) {
        header('HTTP/1.1 200 OK');
        echo json_encode(array('message' => 'reCAPTCHA verification successful', 'score' => $response->score));
    } else {
        header('HTTP/1.1 401 Unauthorized');
        echo json_encode(array('error' => 'reCAPTCHA verification failed', 'score' => $response->score));
    }
    
    exit();
} else {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(array('error' => 'Invalid request'));
    exit();
}
?>