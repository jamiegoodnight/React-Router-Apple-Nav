import React from 'react';

function Nav(props) {
    const subNav = props.nav.find(x => `${x.id}` === props.match.params.id);
    if (!subNav) {
      return <h3>Loading items...</h3>;
    }
    return (
      <div>
          {subNav.sub.map(sub =>(
              <img src="sub.subImage"/>
          ))}
      </div>
    );
}

export default Nav;


//   <div className="App">
// {this.navNames.map(navName => 
//     <nav >
//       <Link exact path={`/nav/${navName.id}}
//      </nav>