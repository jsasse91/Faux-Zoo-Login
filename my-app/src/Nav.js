// Importing react to make it all work
import React from "react";

// Creating the function that will be referred to as Navigation in the index.js file
function Nav() {
  // you want it to return something
  return (
    // If I understand it correctly, we use this because it's an empty tag and prevents errors when you use cascading divs like I have
    <>
      {/* creating a Navbar that uses bootstrap styling classes, this is mostly unmodified from bootstrap, 
      this aligns the text center and places the navbar in a card as well as sets a default active demonstrated by the blue box around home
      none of the links go anywhere as indicated in the instructions*/}
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
// This exports the function so it can be used else where by importing
export default Nav;
