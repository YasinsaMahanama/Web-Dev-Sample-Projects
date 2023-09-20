<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guestbook</title>
</head>
<body>
    <h1>Guestbook</h1>

    <form action="" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea><br><br>

        <input type="submit" name="submit" value="Submit">
    </form>

    <div id="guestbook-entries">
        <?php
        // Check if the form is submitted
        if(isset($_POST['submit'])){
            $name = $_POST['name'];
            $message = $_POST['message'];
            
            // Validate if both name and message are filled in
            if(!empty($name) && !empty($message)){
                echo "<p><strong>Name:</strong> $name</p>";
                echo "<p><strong>Message:</strong> $message</p>";
            } else {
                echo "<p style='color: red;'>Please fill in both the name and message fields.</p>";
            }
        }
        ?>
    </div>
</body>
</html>
