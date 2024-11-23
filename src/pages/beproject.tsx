// components/BEProjectDetails.tsx
import React from "react";

const BEProjectDetails: React.FC = () => {
  return (
    <div style={styles.journalContainer}>
      <h1 >BE Project: Vehicle Information and Fraud Detection System</h1>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Overview</h2>
        <p>
          This AI-based system is designed to scan vehicle number plates using a Raspberry Pi and provide detailed vehicle information. It also verifies if an authorized person is driving the vehicle, helping to detect potential fraud.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Key Components</h2>
        <ul>
          <li>**Raspberry Pi**: The core computing unit of the system.</li>
          <li>**Camera Module**: Captures images of the vehicle number plates.</li>
          <li>**EasyOCR**: Recognizes and extracts text from number plates.</li>
        </ul>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Functionality</h2>
        <p>
          1. Captures the vehicle number plate using the camera.<br />
          2. Extracts and processes the number using EasyOCR.<br />
          3. Cross-verifies vehicle ownership and driver authorization.<br />
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Mentorship and Sponsorship</h2>
        <p>
          **Mentor**: Mr. Prasad Wakade<br />
          **Sponsored By**: Remote Solutions, Pune
        </p>
      </div>
    </div>
  );
};

const styles = {
  journalContainer: {
    fontFamily: "Georgia, serif",
    backgroundColor: "#fffaf0",
    padding: "20px",
    margin: "20px auto",
    width: "80%",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
    textDecoration: "underline",
  },
  section: {
    marginBottom: "15px",
  },
  sectionTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#444",
  },
};

export default BEProjectDetails;
