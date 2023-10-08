// Initial game state

// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const ticTacToe = (element, index) => {
    // Check if the cell is already filled
    if (cells[index] !== '') {
      return;
    }

  const currentCell = btns[index];
  
  cells[index] = currentPlayer;
  element.textContent = currentPlayer;

  // Disable the button
  element.disabled = true;

  // Check for winning conditions
  for (const condition of conditions) {
    const [a, b, c] = condition;
    if (cells[a] === cells[b] && cells[b] === cells[c] && cells[a] !== '') {
      result.textContent = `Player ${currentPlayer} wins!`;
      // Disable all buttons
      btns.forEach(btn => btn.disabled = true);
      return;
    }
  }

  // Check for a draw
  if (cells.every(cell => cell !== '')) {
    result.textContent = "It's a draw! Click 'Reset' to play again.";
    enableResetButton();
    return;
  }

  // Switch players
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  // Display the current player's turn
  result.textContent = `Player ${currentPlayer}'s Turn`;
};

// Function to enable the Reset button
const enableResetButton = () => {
  const resetButton = document.querySelector('.reset-btn');
  resetButton.disabled = false;
};

// Function to reset the game
const resetGame = () => {
  // Reset the game state
  cells = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';

  // Clear the Xs and Os from the buttons and enable them
  btns.forEach((btn, i) => {
    btn.textContent = '';
    btn.disabled = false;
  });

  // Disable the Reset button
  document.querySelector('.reset-btn').disabled = true;

  // Update the 'result' element
  result.textContent = "Player X's Turn";
};

// Attach click event listeners to the game cells
btns.forEach((btn, i) => {
  btn.addEventListener('click', () => ticTacToe(i));
});


// Attach click event listener to the Reset button
document.querySelector('.reset-btn').addEventListener('click', resetGame);



// Rest of your JavaScript code remains the same as provided earlier

// Attach click event listeners to the game cells after the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => ticTacToe(btn, i));
    });
  
    document.querySelector('.reset-btn').addEventListener('click', resetGame);
  });
  