import React from 'react';
import Student from './student';
import College from './college';
import './App.css';


class App extends React.Component {
  state = {  }
  render() { 
    return ( <>
    <Student name="Naruto" number="123" enrolled ="2"/>
    <Student name="Sasuke" number="456" enrolled ="1"/>
    <Student name="Sakura" number="789" enrolled ="3"/>
    <College name="GeorgeBrown" number="000"/>
    </> );
  }
}
 
export default App;



// var ipsumText =
// "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.";

// class App extends React.Component {
//   state = {  }
//   render() { 
//     return (<> <h1>Match This</h1>
//       <div class="box">
//         <div>
//           <a href="#" class="button">Button</a>
//           <div>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
//             odio. Praesent libero.
//           </div>
//         </div>
//       </div>
//       <h1>Your Implementation</h1>
//       <a href="#" class="button">Button</a>
//       <br></br>
//       {ipsumText}
//       </>);
//   } 
  
// }
 
// export default App;