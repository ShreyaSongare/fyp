import { useContext } from "react";
import { SmsContext } from "../context/SmsContext";


export default function Harm() {
const { harmMessages } = useContext(SmsContext);


return (
<div className="page">
<h2>Harm Messages</h2>
{harmMessages.map((msg, index) => (
<p key={index} className="card">{msg}</p>
))}
</div>
);
}