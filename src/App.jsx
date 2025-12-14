import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navigation from "./component/Navigation";
import Picture from "./component/Picture";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Picture></Picture>
      <Navigation></Navigation>
      <Footer></Footer>
    </div>
  );
}

export default App;
