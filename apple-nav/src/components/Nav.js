import React from 'react';

function Nav(props) {
    const choice = props.nav.find(x => `${x.name}` === props.match.params.name);
    if (!choice) {
      return <h3>Loading items...</h3>;
    }
    console.log(choice)
    return (
      <div>
          {choice.sub.map(x =>(
            <div key={x.id}>
              {/* <img src={x.subImage}/> */}
              <p>{x.subName}</p>
            </div>
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