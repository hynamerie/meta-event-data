import Button from './Button';

import ModeToggler from './ModeToggler';

// import './App.css';

function App() {
   // DYNAMIC EVENTS
   function handleClick() {
      let randomNum = Math.floor(Math.random() * 3) + 1;
      console.log(randomNum);
      let userInput = prompt('type a number');
      alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
   }

  return (
   <>
    <Button />
    <ModeToggler />
      <br></br>
      <div>
         <h1>DYNAMIC EVENTS</h1>
         <h2>Task: Add a button and handle a click event</h2>
         <button onClick={handleClick}>Guess the number between 1 and 3</button>
      </div>
      <br></br>
    </>
  );
}

// DYNAMIC EVENTS
// function App() {
//     function handleClick() {
//       let randomNum = Math.floor(Math.random() * 3) + 1;
//       console.log(randomNum);
//       let userInput = prompt('type a number');
//       alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
//     }
//     return (
//       <div>
//         <h1>Task: Add a button and handle a click event</h1>
//         <button onClick={handleClick}>Guess the number between 1 and 3</button>
//       </div>
//     );
//   }
  
export default App;
