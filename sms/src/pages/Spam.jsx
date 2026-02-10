import { useContext } from "react";
import { SmsContext } from "../context/SmsContext";


export default function Spam() {
const { spamMessages } = useContext(SmsContext);


return (
<div className="page">
<h2>Spam Messages</h2>
{spamMessages.map((msg, index) => (
<p key={index} className="card">{msg}</p>
))}
</div>
);
}