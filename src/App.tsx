import { useEffect } from "react";
import { fetchData } from "./api/http";

function App() {

  useEffect(() => {
    fetchData().then(() => {
 
    });
  }, []);

  return (
    <div className="App">
      Gala Show
    </div>
  );
}

export default App;
