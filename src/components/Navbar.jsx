import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    window.location.href = "/";
  };

  const styles = {
    navbar: {
      width: "100%",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      padding: "0.75rem 1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      transition: "all 0.3s ease",
    },
    logo: { fontWeight: "bold", fontSize: "1.6rem", color: "#1f2937", letterSpacing: "1px" },
    links: { display: "flex", alignItems: "center", gap: "1.5rem" },
    link: {
      textDecoration: "none",
      color: "#4b5563",
      fontWeight: 500,
      cursor: "pointer",
      padding: "0.4rem 0.8rem",
      borderRadius: "6px",
      transition: "all 0.2s ease",
    },
    logoutBtn: {
      padding: "0.4rem 0.8rem",
      borderRadius: "8px",
      backgroundColor: "#ef4444",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      fontWeight: 600,
      transition: "all 0.2s ease",
    },
    hamburger: { display: "flex", flexDirection: "column", cursor: "pointer", gap: "4px", zIndex: 1100 },
    bar: { width: "25px", height: "3px", backgroundColor: "#374151", transition: "all 0.3s ease" },
    rotate1: { transform: "rotate(45deg) translate(5px,5px)" },
    rotate2: { transform: "rotate(-45deg) translate(5px,-5px)" },
    fade: { opacity: 0 },
    mobileMenu: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      position: "absolute",
      top: "60px",
      right: 0,
      width: "200px",
      borderRadius: "8px",
      overflow: "hidden",
      animation: "slideDown 0.3s ease forwards",
    },
    mobileLink: {
      padding: "0.75rem 1rem",
      color: "#374151",
      textDecoration: "none",
      fontWeight: 500,
      borderBottom: "1px solid #e5e7eb",
      cursor: "pointer",
      transition: "background 0.2s ease",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Employee Dashboard</div>
      {!isMobile && (
        <div style={styles.links}>
          {["Dashboard", "Employees", "Reports"].map((item) => (
            <span
              key={item}
              style={styles.link}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {item}
            </span>
          ))}
          <button
            style={styles.logoutBtn}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
      {isMobile && (
        <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <div style={{ ...styles.bar, ...(menuOpen ? styles.rotate1 : {}) }}></div>
          <div style={{ ...styles.bar, ...(menuOpen ? styles.fade : {}) }}></div>
          <div style={{ ...styles.bar, ...(menuOpen ? styles.rotate2 : {}) }}></div>
        </div>
      )}
      {menuOpen && isMobile && (
        <div style={styles.mobileMenu}>
          {["Dashboard", "Employees", "Reports"].map((item) => (
            <span
              key={item}
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {item}
            </span>
          ))}
          <button
            style={{ ...styles.logoutBtn, margin: "0.5rem 1rem" }}
            onClick={handleLogout}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
          >
            Logout
          </button>
        </div>
      )}


      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-10px);}
            100% { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </nav>
  );
}
