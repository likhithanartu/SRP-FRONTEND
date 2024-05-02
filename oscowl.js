<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial Calculator</title>
</head>
<body>

<script>
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    // Example usage
    const number = 5;
    const result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
</script>

</body>
</html>
