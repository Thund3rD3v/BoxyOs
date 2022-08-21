import { useState } from "react";

import Header from "./Components/header/Header";
import AppButtons from "./Components/ui/AppButtons";
import WindowsContainer from "./Components/ui/WindowsContainer";

import { WindowsContext } from "./Contexts/WindowsContext";

function App() {
  const [openedWindows, setOpenedWindows] = useState([]);

  console.log(openedWindows);

  return (
    <div className="App">
      <WindowsContext.Provider value={{ openedWindows, setOpenedWindows }}>
        <Header />

        <AppButtons />

        <WindowsContainer />
      </WindowsContext.Provider>
    </div>
  );
}

export default App;
