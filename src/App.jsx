import { useState } from "react";

import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LogOrSign from "./components/logorsign/LogOrSign.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <LogOrSign setLoggedIn={setLoggedIn} />
      <Footer />
    </div>
  );
}

export default App;
