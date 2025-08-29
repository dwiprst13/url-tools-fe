import React, { useState } from "react";
// import QRCode from "qrcode.react";

function QRGenerator() {
  const [url, setUrl] = useState("");
//   const [qrValue, setQrValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setQrValue(url);
  };

  return (
    <>
    </>
  );
}

export default QRGenerator;
