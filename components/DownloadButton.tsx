import { motion } from "framer-motion";

function DownloadButton() {
  return (
    <motion.a
      href="/FlorinDobinciucResume.pdf"
      download="Florin-Dobinciuc-Resume.pdf"
      className="download-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Download My Resume
    </motion.a>
  );
}

export default DownloadButton;
