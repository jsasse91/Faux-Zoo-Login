// Importing react to make it all work
import React from "react";

// Creating the function that will be referred to as Login in the index.js file
function Login() {
  // you want it to return something
  return (
    // If I understand it correctly, we use this because it's an empty tag and prevents errors when you use cascading divs like I have
    <>
      {/* Setting the content in rows and set to justify content end which fills in the content from right to left */}
      <div className="row justify-content-end">
        {/* I wanted them to be even columns so I set it at 4 or 1/3 the width of the page */}
        <div className="col-4">
          {/* I wanted the form within a container that has a solid, rounded border a shadow and has a contrast against the darker background,
          also gave a margin top of 2 to create separation from the nav bar */}
          <div className="container border border-solid rounded shadow mt-2 bg-light">
            <form>
              {/* Giving the form a header title and aligning center */}
              <h3 className="text-center mt-1">
                Log In to Manage your Account
              </h3>
              {/* Now we're starting to build the form, first building a label and input field for Email */}
              <div className="row align-items-center m-3">
                <label htmlFor="inputEmail" className="col-sm-3 col-form-label">
                  Email:
                </label>
                <div className="col-sm-auto">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                  />
                </div>
              </div>
              {/* Next by doing the same but for Password */}
              <div className="row m-3">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-3 col-form-label"
                >
                  Password:
                </label>
                <div className="col-sm-auto">
                  <input
                    type="email"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              {/* At work we have Multi-Factor Authentication, so I added a check box to remember my device for 90 days */}
              <div className="row m-3">
                <div className="col-sm-auto">
                  <div className="form-check">
                    {/* I styled it, or tried to, it's kind of hard to see a shadow around the check box  */}
                    <input
                      className="form-check-input shadow"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Remember my device for the next 90 days?
                    </label>
                  </div>
                </div>
                <div className="col-sm-4">
                  {/* Finally creating a button which is not hooked up to anything*/}
                  <button className="btn btn-primary">Continue</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Sometimes log in boxes contain little blurbs about the types of things you can do after logged in. 
        I used a lorem ipsum generator to generate some content */}
        <div className="col-4 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel metus
          et sem faucibus imperdiet. Nunc placerat non magna ac auctor. Morbi et
          hendrerit nulla. Phasellus hendrerit nisl quis metus sodales
          hendrerit. Vestibulum quis lectus volutpat, eleifend turpis vitae,
          suscipit risus. Integer nibh felis, congue a sagittis ac, ornare at
          turpis. Suspendisse accumsan semper risus, et venenatis justo
          tincidunt a. Maecenas suscipit orci id varius viverra. Aliquam nunc
          urna, cursus nec enim a, tristique suscipit ex. Pellentesque
          ullamcorper eros est, quis iaculis sem rhoncus pharetra.
        </div>
      </div>
    </>
  );
}

// This exports the function so it can be used else where by importing
export default Login;
