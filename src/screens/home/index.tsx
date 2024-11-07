import { useEffect, useRef, useState } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);


  useEffect(() =>{
     const canvas = canvasRef.current;

     if(canvas){
        const ctx = canvas.getContext('2d');
        if(ctx){
            canvas.width = window.innerWidth ; 
            canvas.height = window.innerHeight - canvas.offsetTop;
            ctx.lineCap = "round";
            ctx.lineWidth = 3;
        }
      
     }
  },[]);
  // Start drawing when the mouse is pressed down
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.background = "black";
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
      }
    }
  };

  // Stop drawing when the mouse is released or leaves the canvas
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Draw when the mouse is moving and is currently in "drawing" mode
  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.strokeStyle = "white"; // Set stroke color
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
      }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="absolute top-0 left-0 w-full h-full"
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
    />
  );
}
