<?php
if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $enquiry_alert = "
    <div style='font-family: sans-serif;''>
        <div style='margin: 0 auto 20px; font-family:Work Sans; text-align: center;'>
            <h2 style='margin: 0;'>Contact Details</h2>
        </div>

        <table style='border-collapse: collapse; margin:0 auto; color: #202020; text-align: left;'>

            <tr style=' border: 1px solid #c4c4c4; border-collapse: collapse;'>
                <th style='border: 1px solid #c4c4c4; border-collapse: collapse; padding: 15px;'>
                    Name
                </th>

                <td style='border: 1px solid #c4c4c4; border-collapse: collapse; padding: 15px;'>
                    $name
                </td>

            </tr>

            <tr style=' border: 1px solid #c4c4c4; border-collapse: collapse;'>
                <th style=' border: 1px solid #c4c4c4; border-collapse: collapse; padding: 15px;'>
                    Email
                </th>

                <td style='border: 1px solid #c4c4c4; border-collapse: collapse; padding: 15px;'>
                    $email
                </td>

            </tr>

            <tr style=' border: 1px solid #c4c4c4; border-collapse: collapse;'>
                <th style=' border: 1px solid #c4c4c4; border-collapse: collapse; padding: 15px;'>
                    Subject
                </th>

                <td style='border: 1px solid #c4c4c4; border-collapse: collapse; padding: 15px;'>
                    $subject
                </td>

            </tr>

            <tr style=' border: 1px solid #c4c4c4;border-collapse: collapse;'>
                <th style=' border: 1px solid #c4c4c4; border-collapse: collapse; padding: 15px;'>
                    Message
                </th>

                <td style='border: 1px solid #c4c4c4; border-collapse: collapse; padding: 15px;'>
                    $message
                </td>

            </tr>

        </table>
    </div>";

    $mailheaders = "MIME-Version: 1.0\r\n";
    $mailheaders .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $mailheaders .= "From:\ $name <donotreply@test.org>\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP" . phpversion() . "\r\n";

    if (mail("muthumk10001@gmail.com","Contact Form",$enquiry_alert)) {
        echo "<h1>Hi" . " " . $name . ", Your form has been submitted successfully. Thank you!</h1>";
    } else {
        echo json_encode("Oops! Something went wrong! Form not submitted. Please try again");
    }
}
