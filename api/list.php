<?php

$list = file_get_contents('../db/todolist.json');

header('Content-Type: application/json');
