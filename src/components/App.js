import React from 'react';
import Contact from './Contact';

class App extends React.Component{
  render(){
    return(
      <Contact />
    );
  }
}

const { hot } = require('react-hot-loader/root');
const Hot = hot(App);
export default Hot;