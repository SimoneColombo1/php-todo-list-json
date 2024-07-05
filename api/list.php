<?php
header('Content-Type: application/json');
$list = file_get_contents('../db/todolist.json');
echo $list;
