/*------------ Hands-on 9 ------------------------*/

import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {
  const flag = false; // Change this flag to true or false to switch between ListofPlayers and IndianPlayers

  if (flag) {
    return <ListofPlayers />;
  } else {
    return <IndianPlayers />;
  }
}

export default App;