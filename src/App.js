import { useEffect } from 'react';
import Home from "./pages/Home"

function App() {
  useEffect(() => {
    document.title = "Netflix Clone | Eonsinde"
  }, [])

  return (
    <>
      <Home />
    </>
  );
}

export default App;
