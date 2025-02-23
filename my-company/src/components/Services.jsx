function Services() {
  const servicesStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    textAlign: "center",
    padding: "20px",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    marginTop: "20px",
  };

  const listItemStyle = {
    background: "#f8f9fa",
    padding: "10px 20px",
    margin: "8px 0",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <div style={servicesStyle}>
      <h1>Our Services</h1>
      <ul style={listStyle}>
        <li style={listItemStyle}>Technology Consulting</li>
        <li style={listItemStyle}>Market Analysis</li>
        <li style={listItemStyle}>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
