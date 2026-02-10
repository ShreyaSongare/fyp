import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>📩 SMS Detection System</h1>

      <p style={{ maxWidth: "700px", margin: "20px auto", lineHeight: "1.6" }}>
        Our SMS Detection System helps users identify whether a message is
        <strong> Spam</strong>, <strong>Harmful</strong>, or <strong>Safe</strong>.
        With the increasing number of fraud messages, phishing attacks, and
        threatening content, it has become very important to verify SMS before
        trusting them.
      </p>

      <p style={{ maxWidth: "700px", margin: "20px auto", lineHeight: "1.6" }}>
        This application allows you to paste any SMS and instantly detect its
        category. Detected messages are automatically stored in Spam or Harm
        sections for better tracking and security awareness.
      </p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <Link to="/login">
          <button style={{ marginRight: "10px" }}>Get Started</button>
        </Link>

        <Link to="/signup">
          <button>Create Account</button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
