<?php

    function random_string($length) {
        $key = '';
        $keys = array_merge(range(0, 9), range('a', 'z'), range('A', 'Z'));
    
        for ($i = 0; $i < $length; $i++) {
            $key .= $keys[array_rand($keys)];
        }
    
        return $key;
    }

    $ds = DIRECTORY_SEPARATOR;
    $storeFolder = 'uploads';

    if (!empty($_FILES)) {
        $archive_name = random_string(7);
        $zip = new ZipArchive();
        $targetPath = $storeFolder . $ds;
        if ($zip->open($targetPath . $archive_name . '.zip', ZipArchive::CREATE) === TRUE) {
            foreach ($_FILES['file'] as $file) {
                $tempFile = $_FILES['file']['tmp_name'];           
                $targetFile =  $targetPath . $_FILES['file']['name'];
                $fileName = $_FILES['file']['name'];
                move_uploaded_file($tempFile, $targetFile);
                
                $zip->addFile($targetFile, $archive_name . '/' . $fileName);
                // unlink("uploads/" . $fileName);
            }
            $zip->close();
        }
    }
?>