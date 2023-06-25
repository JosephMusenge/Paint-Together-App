# Paint Together App

The Paint Together App is a collaborative drawing application that allows multiple users to paint on a shared canvas in real-time using Firebase Real-Time Database. Users can draw on the canvas simultaneously from anywhere in the world, creating a collaborative and interactive painting experience.

# Firebase Real-Time Database Integration

This project demonstrates the integration of Firebase Real-Time Database into a web application. The application allows users to create a grid of cells and change their background color in real-time using Firebase.

## How to Use

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. The application will create a grid of cells with the specified number of rows and columns.
4. Move the mouse pointer over a cell, and if the left mouse button is clicked or pressed, the cell's background color will be changed in real-time and synchronized with Firebase Real-Time Database.
5. Open the Firebase Real-Time Database console to view the updated values.

**Note:** Make sure you have an internet connection and that your Firebase project's Real-Time Database rules allow read and write access for the application to function properly.

## Dependencies

- This application utilizes the Firebase JavaScript SDK to interact with the Firebase Real-Time Database. The necessary SDKs are imported dynamically using `<script>` tags in the `index.html` file.

