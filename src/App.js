import React from 'react';
class App extends React.Component{
  render(){
    let name = this.props.name;
    return <div>
    <h1>Mi nombre es {name}</h1>
    <b>Esto esta en bold</b>
    </div>
  
  }
}
export default App;
