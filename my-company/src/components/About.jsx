function About() {
  const aboutStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    textAlign: "center",
    padding: "20px",
  };

  return (
    <div style={aboutStyle}>
      <h1>About Us</h1>
      <p>
        Our company has been providing top-notch services since 1990. We specialize in various fields 
        including technology, marketing, and consultancy.
      </p>
    </div>
  );
}

export default About;
