import { createContext, useState } from "react";


export const SmsContext = createContext();


export const SmsProvider = ({ children }) => {
const [spamMessages, setSpamMessages] = useState([]);
const [harmMessages, setHarmMessages] = useState([]);


const detectSms = (text) => {
const lower = text.toLowerCase();


if (lower.includes("win") || lower.includes("lottery") || lower.includes("offer")) {
setSpamMessages((prev) => [...prev, text]);
return "Spam";
} else if (lower.includes("kill") || lower.includes("attack") || lower.includes("danger")) {
setHarmMessages((prev) => [...prev, text]);
return "Harm";
} else {
return "Safe";
}
};


return (
<SmsContext.Provider value={{ spamMessages, harmMessages, detectSms }}>
{children}
</SmsContext.Provider>
);
};