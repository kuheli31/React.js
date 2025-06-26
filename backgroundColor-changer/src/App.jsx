import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center inset-y-8 right-10 w-16">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-8 rounded-2xl">
          <button
            className="outline-none px-5 py-0 w-20 h-12 rounded-3xl text-white font-bold flex items-center justify-center"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-5 py-0 w-20 h-12 rounded-3xl text-white font-bold flex items-center justify-center"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-5 py-0 w-20 h-12 rounded-3xl text-black font-bold flex items-center justify-center"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-5 py-0 w-20 h-12 rounded-3xl text-white font-bold flex items-center justify-center"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-5 py-0 w-20 h-12 rounded-3xl text-white font-bold flex items-center justify-center"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-5 py-0 w-20 h-12 rounded-3xl text-white font-bold flex items-center justify-center"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-5 py-0 w-20 h-12 rounded-3xl text-white font-bold flex items-center justify-center"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-5 py-0 w-20 h-12 rounded-3xl text-black font-bold flex items-center justify-center"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
