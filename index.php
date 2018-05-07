<?php

    // Random string
    function random_string($length) {
        $key = '';
        $keys = array_merge(range(0, 9), range('a', 'z'), range('A', 'Z'));
    
        for ($i = 0; $i < $length; $i++) {
            $key .= $keys[array_rand($keys)];
        }
    
        return $key;
    }

    // New directory
    $folder_name = random_string(7);

    if (!file_exists('uploads/' . $folder_name)) {
        mkdir('uploads/' . $folder_name, 0777, true);
    }

    // Upload files
    $total = count($_FILES['file']['name']);

    for($i=0; $i<$total; $i++) {
        $tmpFilePath = $_FILES['file']['tmp_name'][$i];
        if ($tmpFilePath != ""){
            $newFilePath = "./uploads/" . $folder_name . '/' . $_FILES['file']['name'][$i];
            if(move_uploaded_file($tmpFilePath, $newFilePath)) {
                // Log Error
            }
        }
    }

?>