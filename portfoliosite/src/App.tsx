import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, alertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => alertVisibility(false)}>Button Clicked</Alert>
      )}
      <Button onClick={() => alertVisibility(true)}>Click Me</Button>
    </div>
  );
}

export default App;
