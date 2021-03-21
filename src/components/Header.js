import React from 'react';

function Header({titulo}){
    return(
        <nav>
            <div className="navbar navbar-light bg-light">
        <h2 data-testid="title">
            Welcome to {titulo}         
          </h2>
          
            </div>
        </nav>
    )

}

export default Header;
