// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkG8NBuIDsKCky4lPzrQBQ_UrOwnViM1g",
  authDomain: "painttogetherapp-a9fee.firebaseapp.com",
  databaseURL: "https://painttogetherapp-a9fee-default-rtdb.firebaseio.com",
  projectId: "painttogetherapp-a9fee",
  storageBucket: "painttogetherapp-a9fee.appspot.com",
  messagingSenderId: "468683193305",
  appId: "1:468683193305:web:8a7d450d8f1f61152f77c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Real Time Database
const db = getDatabase(app);

// Start-up function
function bootstrap() {
  createTable(20, 20);
  intitFirebaseDatabase();
}

// create table
function createTable(rows, columns) {
  const table = document.getElementById('table');

  for (let row = 1; row <= rows; row++) {
    const rowElement = document.createElement('tr');

    for (let column = 1; column <= columns; column++) {
      const cellElement = document.createElement('td');

      cellElement.dataset.row = row;
      cellElement.dataset.column = column;
      
      cellElement.addEventListener('mouseenter', onMouseEnterCell);
      cellElement.addEventListener('mousedown', onMouseEnterCell);

      rowElement.append(cellElement);
    }

    table.append(rowElement);
  }
}

function onMouseEnterCell(e) {
  // Determine if left mouse is clicked or pressed
  if (e.buttons === 1) {
    const cellElement = e.target;
    
    set(
      ref(db, `${cellElement.dataset.row}/${cellElement.dataset.column}`
    ), document.getElementById('brush-color').value);
  }
}

function intitFirebaseDatabase() {
  // When colors change in the database, update styles
  onValue(ref(db), (snapshot) => {
    const data = snapshot.val();

    // Construct css style rules for each cell
    let styles = '';
    for (let row of Object.keys(data)) {
      for (let column of Object.keys(data[row])) {
        const cellColor = data[row][column]
        console.log('Firebase Real time Datase', `row ${row}, column ${column} = ${cellColor}`)
        styles += `
        td[data-row="${row}"][data-column="${column}"] {
          background-color: ${cellColor};
        }
        `
      }
    }

    document.getElementById('styles').innerHTML = styles
  });
}

document.addEventListener('DOMContentLoaded', () => {
  bootstrap();
})
