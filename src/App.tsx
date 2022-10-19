import MeshGradient from "mesh-gradient.js";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const COLORS = ["#fff", "#b48168", "#aa6e5b", "#bdb1a6"];

function App() {
  // create instance of Gradient Class
  const gradient = new MeshGradient();
  const canvasId = "my-canvas";

  useEffect(() => {
    const pathname: String = window.location.pathname;
    console.log(pathname);
    var colorsFromPath: Array<string> = [];
    pathname
      .replaceAll("/index.html", "")
      .replaceAll("/", "")
      .split("-")
      .forEach((color) => colorsFromPath.push(color));

    console.log(colorsFromPath);

    const value = Math.floor(Math.random() * 10000);
    if (colorsFromPath.length == 4) {
      gradient.initGradient("#" + canvasId, colorsFromPath);
    } else {
      gradient.initGradient("#" + canvasId, COLORS);
    }
    gradient?.changePosition(value);
  }, []);

  return (
    <div className="App">
      <canvas id={canvasId} width="800" height="600" />
      <section>
        <h1>Mesh Gradient</h1>
      </section>
    </div>
  );
}

export default App;
