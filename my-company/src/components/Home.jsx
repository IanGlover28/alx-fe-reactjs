function Home() {
    const homeStyle = {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Full viewport height
      textAlign: "center",
      padding: "20px",
      backgroundImage: "url('/joanna-kosinska-1_CMoFsPfso-unsplash.jpg')", // Use public folder path
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white", // Ensure text is readable
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Text readability on bright images
    };
  
    return (
      <div style={homeStyle}>
        <h1>Welcome to Our Company</h1>
        <p>We are dedicated to delivering excellence in all our services.</p>
      </div>
    );
  }
  
  export default Home;
  