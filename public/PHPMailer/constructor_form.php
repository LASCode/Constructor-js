<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = 'Конфигурация промышленной мебели:<br>';
    $data .= "Имя: ". $_POST["data"][0]['nameUser'] ."<br>";
    $data .= "Телефон: ". $_POST["data"][0]['phone'] ."<br>";
    $data .= "Email: ". $_POST["data"][0]['email'] ."<br>";
    $data .= "Инн: ". $_POST["data"][0]['inn'] ."<br>";
    $data .= "Комментарий к заказу: ". $_POST["data"][0]['comment'] ."<br><br>";

    if(empty($_POST["data"][0]['nameUser'])&&empty($_POST["data"][0]['phone'])&&empty($_POST["data"][0]['email'])) {
        echo 0;
        die();
    }


    foreach ($_POST["data"] as $key => $item) {
        if ($key === 0) {
            continue;
        }

        if ($item['name'] == 'Средняя стойка') {
            $item['name'] = 'Разделительная рама';
        }
        if ($item['name'] == 'Панель перфорированная стальная - левая') {
            $item['name'] = 'Перфорированный экран левый';
        }
        if ($item['name'] == 'Панель перфорированная стальная - правая') {
            $item['name'] = 'Перфорированный экран правый';
        }
        if ($item['name'] == 'Рельс для крепления ячеек комплектации - левый-верхний') {
            $item['name'] = 'Планка для крепления лотков левая-верхняя';
        }
        if ($item['name'] == 'Рельс для крепления ячеек комплектации - правый-верхний') {
            $item['name'] = 'Планка для крепления лотков правая-верхняя';
        }
        if ($key > 0) {
            $data = $data . "\r\nНазвание: " . $item['name'] . ', Размер: ' . $item['size'] . "<br>";
        }
    }
    // Файлы phpmailer
    require 'PHPMailer.php';
    require 'SMTP.php';
    require 'Exception.php';

    $email = 'info@teras-mebel.ru';

    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $msg = "ok";
        $mail->isSMTP();
        $mail->CharSet = "UTF-8";
        $mail->SMTPAuth = true;

        // Настройки вашей почты
        $mail->Host = 'smtp.mail.ru'; // SMTP сервера GMAIL
        $mail->Username = 'info@teras-mebel.ru'; // Логин на почте
        $mail->Password = 'nSfes2fTqVveMUfREBLi'; // Пароль на почте
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->setFrom('info@teras-mebel.ru'); // Адрес самой почты и имя отправителя

        // Получатель письма
        $mail->addAddress('info@teras-mebel.ru');

        // Прикрипление файлов к письму
//        if (!empty($_FILES['myfile']['name'][0])) { ESD_Mebel-010719
//            for ($ct = 0; $ct < count($_FILES['myfile']['tmp_name']); $ct++) {
//                $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['myfile']['name'][$ct]));
//                $filename = $_FILES['myfile']['name'][$ct];
//                if (move_uploaded_file($_FILES['myfile']['tmp_name'][$ct], $uploadfile)) {
//                    $mail->addAttachment($uploadfile, $filename);
//                } else {
//                    $msg .= 'Неудалось прикрепить файл ' . $uploadfile;
//                }
//            }
//        }

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);

        $mail->Subject = 'Заказ стола TERAS';
        $mail->Body = $data;


        // Проверяем отравленность сообщения
        if ($mail->send()) {
            echo "$msg";
        } else {
            echo $mail->ErrorInfo;
            echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
        }

    } catch (Exception $e) {
        echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }
}
