import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// Diferenta dintre functie (sus) si clasa (jos)



// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';


// class App extends Component {

//   constructor(props) {
//     super(props);
//     console.log('Sunt in constructor');
//   }
//   componentDidMount() {
//     console.log('Sunt in componentDidMount');
//   }
  
//   render() {
//     return (
//         <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           <Welcome name="Popescu" prenume="Mihai" />
//         </header>
//       </div>
//     );
//   }

// }
//  function Welcome(props) {
//     return <h1>Bine ai venit { props.name } { props.prenume } la React</h1>
//   }

// export default App;
