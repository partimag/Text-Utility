import "./App.css";
import QRCode from "react-qr-code";
import { useState } from "react";

function App() {
  const [value, setValue] = useState();
  const [Bgcolor, setBgColor] = useState("#FFFF");
  const [fore, setFore] = useState("#000000");

  const [size, setSize] = useState(200);

  return (
    <>
      <div className="contanier">
        <input
          type="text"
          placeholder="value of QR code"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="background color"
          onChange={(e) => setBgColor(e.target.value)}
        ></input>
        <br />
        <br />
        <input
          type="text"
          placeholder="color"
          onChange={(e) => setFore(e.target.value)}
        ></input>

        <br />
        <br />
        <input
          type="number"
          placeholder="size of number"
          onChange={(e) =>
            setSize(parseInt(e.target.value === "" ? 0 : e.target.value, 10))
          }
        ></input>
        <br />
        <br />
        {value && (
          <QRCode
            title="QR code"
            value={value}
            bgColor={Bgcolor}
            fgColor={fore}
            size={size === "" ? 0 : size}
          />
        )}
      </div>
    </>
  );
}

export default App;
