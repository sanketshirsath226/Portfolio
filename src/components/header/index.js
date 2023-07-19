import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web/index";


function Header() {
  const [isOpen, setIsOpen]=useState(false);
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={()=>setIsOpen(!isOpen)}>
            <i class="fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;