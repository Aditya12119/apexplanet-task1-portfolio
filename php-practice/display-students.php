<?php

include "db.php";

$sql = "SELECT * FROM students";

$result = mysqli_query($conn, $sql);

?>

<!DOCTYPE html>
<html>

<head>

    <title>Student Records</title>

</head>

<body>

    <h1>Student Management</h1>

    <table border="1" cellpadding="10">

        <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Email</th>

            <th>Course</th>

            <th>Age</th>

        </tr>

        <?php

        while ($row = mysqli_fetch_assoc($result)) {

        ?>

            <tr>

                <td><?php echo $row["id"]; ?></td>

                <td><?php echo htmlspecialchars($row["name"]); ?></td>

                <td><?php echo htmlspecialchars($row["email"]); ?></td>

                <td><?php echo htmlspecialchars($row["course"]); ?></td>

                <td><?php echo $row["age"]; ?></td>

            </tr>

        <?php

        }

        ?>

    </table>

</body>

</html>

<?php

mysqli_close($conn);

?>