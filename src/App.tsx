import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MeshGradientAnimation from "./components/MeshGradient";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MeshGradientAnimation
        blur={90}
        radius={0}
        leftradius={25}
        opacity={true}
        img={
          "https://firebasestorage.googleapis.com/v0/b/nosso-role.appspot.com/o/public%2Fprofile.png?alt=media&token=af77bec5-a66d-4761-b755-edd3d90e9fb8"
        }
        colors={["123321", "123321", "123321", "ffffff"]}
        id={"mesh-gradient-profile"}
      />
    </div>
  );
}

export default App;
