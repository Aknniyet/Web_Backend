// Import required modules
const express = require('express'); // Express framework for creating the server
const bodyParser = require('body-parser'); // Middleware for parsing form data

// Initialize the app
const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(express.static('public')); // Serve static files (like CSS) from the 'public' folder

// Route for the home page
app.get('/', (req, res) => {
    // Serve the index.html file when the user accesses the root URL
    res.sendFile(__dirname + '/views/index.html');
});

// Route for handling the form submission
app.post('/calculate', (req, res) => {
    // Retrieve the 'weight', 'height', and 'age' field values from the submitted form
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const age = parseInt(req.body.age);

    // Validate input
    if (!weight || !height || weight <= 0 || height <= 0 || isNaN(age) || age <= 0) {
        return res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Error</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <h1>Error</h1>
                <p>Please enter valid and positive numbers for weight, height, and age.</p>
                <a href="/">Go back</a>
            </body>
            </html>
        `);
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Determine the BMI category
    let category;
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 24.9) category = 'Normal weight';
    else if (bmi < 29.9) category = 'Overweight';
    else category = 'Obesity';

    // Respond with the BMI result
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your BMI Result</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <h1>Your BMI Result</h1>
            <p>BMI: ${bmi}</p>
            <p>Category: ${category}</p>
            <p>Age: ${age} years</p>
            <a href="/">Go back</a>
        </body>
        </html>
    `);
});

// Start the server
const PORT = 3000; // Define the port number
app.listen(PORT, () => {
    // Log a message when the server starts
    console.log(`Server is running on http://localhost:${PORT}`);
});
