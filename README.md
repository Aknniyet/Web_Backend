# BMI Calculator

## Description
A BMI (Body Mass Index) calculator built using Node.js, Express.js, HTML, and CSS. This application allows users to input their weight, height, and age, calculates their BMI, and displays the result along with the corresponding category (Underweight, Normal weight, Overweight, or Obesity).

## Project Functionality
1. **User Input**:
   - The user enters their **weight**, **height**, and **age** into a form on the main page.
   
2. **BMI Calculation**:
   - Once the user submits the form, the application calculates their BMI using the formula:
   - The result is displayed on a new page, showing the calculated BMI and its corresponding category (e.g., Underweight, Normal weight, Overweight, or Obesity).
   
3. **Validation**:
   - The app validates the input data to ensure that the weight, height, and age are positive numbers. If invalid data is entered, an error message is displayed, prompting the user to enter valid values.

4. **Categories**:
   The BMI value is categorized as follows:
     - **Underweight**: BMI < 18.5
     - **Normal weight**: 18.5 <= BMI < 24.9
     - **Overweight**: 25 <= BMI < 29.9
     - **Obesity**: BMI >= 30

5. **Error Handling**:
   - If the user enters invalid data (e.g., negative values or non-numeric inputs), an error page is displayed with a message to guide the user to provide valid data.

## How to Run

1. Clone the repository
2. Install dependencies: npm install npm install express body-parser
3. Run the server: node server.js

If you encounter an error related to the execution policy, use the following command: Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
