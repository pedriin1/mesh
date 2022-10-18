import React, { useEffect, useState, useRef } from "react";
import { Gradient } from "./Gradient.js";
import styled from "styled-components";
import useImageColor from "use-image-color";
import MeshGradient from "mesh-gradient.js";


// import { Container } from "./styles";
export function LightenDarkenColor(colorCode, amount, opacity) {
  var usePound = false;

  if (colorCode[0] == "#") {
    colorCode = colorCode.slice(1);
    usePound = true;
  }

  var num = parseInt(colorCode, 16);

  var r = (num >> 16) + amount;

  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  var b = ((num >> 8) & 0x00ff) + amount;

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  var g = (num & 0x0000ff) + amount;

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

const COLORS = ["#202020", "#202020", "#202020", "#202020"];

export default function MeshGradientAnimation(props) {
  const canvas = useRef();
  const image2 = useRef();
  const [image, setImage] = useState("#202020");

  const colors = props.colors;

  // const { colors } = useImageColor(image, {
  //   cors: true,
  //   colors: 4,
  //   format: "hex",
  // });
  


  useEffect(() => {

   
    // const gradient = new MeshGradient();
    // gradient.initGradient("#" + props.id, COLORS);
   
    // gradient.initMesh()
    // if (colors){
    //   gradient.changeGradientColors(colors);
    // }
    // gradient?.changePosition(Math.floor(Math.random() * 1000));

    const gradient = new Gradient();

    gradient.initGradient("#" + props.id);
    // gradient.seed = Math.floor(Math.random() * 1000);
    gradient.play();
    // setImage(canvas.current.toDataURL("image/png").replace("image/png", "image/octet-stream"))

  }, [colors, props]);

  const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    >img{
      width: 100vw;
      height: 100vh;
    }
    canvas {
      /* width: 100%;
      height: 100%; */
      width: 100vw;
      height: 100vh;

      --gradient-color-1: ${Array.isArray(colors)
        ? colors[3]
        : "#231f20"};
      --gradient-color-2: ${Array.isArray(colors)
        ? colors[1]
        : "#231f20"};
      --gradient-color-3: ${Array.isArray(colors)
        ? colors[2]
        : "#231f20"};
      --gradient-color-4: ${Array.isArray(colors)
        ? colors[0]
        : "#231f20"};
    }
    .content {
      position: absolute;
      width: 100%;
      height: 100%;

      background-color: ${props.opacity ?  "rgba(0,0,0,0.5)" : "transparent"};

      top: 0;
      z-index: 0;
    }
  `;

  return (
    <Container>
      <canvas
        id={props.id}
        ref={canvas}
        data-transition-in
        styles={{ borderRadius: props.radius }}
      />
      <section className="content">{props.children}</section>

  
    </Container>
  );
}
