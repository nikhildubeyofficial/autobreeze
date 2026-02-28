import React from 'react'

const SignLeftSide = ({children}) => {
  return (
    <div className="row">
        <div className="col-12 col-md-6 ps-0 d-none d-md-block  ">
            <img
              src="./img/signinimg.png"
              alt="Logo"
              className="img-fluid w-100 siginimg"
            />
          </div>
      {children}
    </div>
  )
}

export default SignLeftSide;
