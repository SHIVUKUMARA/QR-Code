import { useState } from "react";
import QRCode from "react-qr-code";
import "./QR.css"

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQR() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="box">
      <div className="container">
        <h1>QR Code Generator</h1>
        <div className="form">
          <input
            className="input1"
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            value={input}
            placeholder="Enter Something Here"
          />
          <button
            className="btn"
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handleGenerateQR}
          >
            Generate QR-Code
          </button>
        </div>
        <div className="qrcode">
          <QRCode
            id="qr-code-value"
            value={qrCode}
            size={300}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            bgColor="white"
          />
        </div>
        <p>Created by SHIVUKUMARA @ React-Developer</p>
      </div>
    </div>
  );
}