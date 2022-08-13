import React from "react";

import { AppProvider } from "../AppContext";

// Importamos la UI de nuestra APP
import { AppUI } from './AppUI';

function App() {
  return (
    <AppProvider>
      <AppUI />
    </AppProvider>
  );
}

export default App;
