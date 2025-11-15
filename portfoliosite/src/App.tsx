import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import CustomHeader from "./components/CustomHeader";
import "./App.css";
import TopBar from "./components/TopBar";

function App() {
  const [alertVisible, alertVisibility] = useState(false);
  return (
    <div>
      <TopBar />
      <CustomHeader text="Hello" />
      {alertVisible && (
        <Alert onClose={() => alertVisibility(false)}>Button Clicked</Alert>
      )}
      <Button onClick={() => alertVisibility(true)}>Click Me</Button>
    </div>
  );
}

export default App;
