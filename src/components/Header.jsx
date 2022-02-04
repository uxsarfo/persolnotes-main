import React from "react";

function Header() {
  const logo = <img src="/persolnotes.png" className="persolLogo" />;
  return (
    <div className="header">
      {logo}
      {/* <h1>Persol Notes</h1> */}
    </div>
  );
}

export default Header;
