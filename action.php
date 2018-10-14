<?php
if (isset($_POST['much'])) {
file_put_contents('./data.html', $_POST['wow'], FILE_APPEND);
file_put_contents('./data.html', $_POST['doge'], FILE_APPEND); 
}
?>

                 
