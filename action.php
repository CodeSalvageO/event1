<?php
if (isset($_POST['much'])) {
file_put_contents('./data.txt', $_POST['wow'], FILE_APPEND
