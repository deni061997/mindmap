import Canvas from "./Canvas.js";

export type Color = string;
export type Coordinate = number;

interface INodule {
  textContent: string;
  x: number;
  y: number;
  bordered: boolean;
  borderColor: Color;

  draw: (canvas: Canvas) => void;
}

class Nodule implements INodule {
  textContent = "";
  x = 0;
  y = 0;
  bordered = true;
  borderColor = "black";

  constructor(textContent: string = "") {
    if (textContent) {
      this.textContent = textContent;
    }
  }

  draw(canvas: Canvas) {
    const { context } = canvas;

    context.beginPath();

    context.strokeText(this.textContent, this.x, this.y);
  }
}

export default Nodule;
