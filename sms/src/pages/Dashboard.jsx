import { useState, useContext } from "react";
import { SmsContext } from "../context/SmsContext";


export default function Dashboard() {
const [text, setText] = useState("");
const { detectSms } = useContext(SmsContext);
const [result, setResult] = useState(null);


const handleDetect = () => {
const res = detectSms(text);
setResult(res);
setText("");
};
return (
<div className="dashboard">
<h2>SMS Detection</h2>
<textarea
value={text}
onChange={(e) => setText(e.target.value)}
placeholder="Paste your SMS here..."
/>
  <div className="btn-center">
    <button onClick={handleDetect}>Detect</button>
  </div>

  {result && <p className="result">Detected: {result}</p>}
</div>
);
}