import React, { Component } from 'react';
import logo from './logo.svg';
import logostyled from './styled-components.png';
import './App.css';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <Content>
        <Header>
          <div className="logo-header">
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src={logo} className="App-logo" alt="logo" /></a>
            <span className="cross">&times;</span>
            <a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer"><img src={logostyled} alt="Styled Components" /></a>
          </div>
          <h1>&lt;Codetober 01/&gt;</h1>
        </Header>
        <Body>
          <h2>Coding October - 01 October 2018</h2>
          <p>This movement purely self-improvising act to keep motivated and explore new technologies.</p>
          <h3>About Codetober 01</h3>
          <p>This project consist integration of pure <code>Create React App</code> application with <code>Styled Components</code> package.</p>
          <h5>About Styled Components</h5>
          <p>Visual primitives for the component age.</p>
          <p>Use the best bits of ES6 and CSS to style your apps without stress <span role="img" aria-label="styled-components">💅</span></p>
          <h6>Installation</h6>
          <p>To download styled-components run <code>npm install --save styled-components</code>. That's all you need to do, you are now ready to use it in your app! (yep, no build step needed <span role="img" aria-label="ok">👌</span>)</p>
          <h4>Example in this project</h4>
          <p>
            <code style={{textAlign: 'left', padding: '.5rem 1rem'}}><br/>
const Content = styled.div`<br/>
&nbsp;&nbsp;background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));<br/>
&nbsp;&nbsp;min-height: 100vh;<br/>
`<br/>
<br/>
const Header = styled.div`<br/>
&nbsp;&nbsp;background: rgba(255,255,255,.2);<br/>
&nbsp;&nbsp;text-align: center;<br/>
&nbsp;&nbsp;color: #fff;<br/>
&nbsp;&nbsp;padding: 2rem 1rem;<br/>
`<br/>
<br/>
const Body = styled.div`<br/>
&nbsp;&nbsp;text-align: center;<br/>
&nbsp;&nbsp;padding: 2rem 1rem;<br/>
&nbsp;&nbsp;color: #fff;<br/>
`<br/>
</code>
          </p>
          <h3>Motivation</h3>
          <p>To start this month with positive mindset, i will push new repository with different project or plugin integration to showcase their capabilities.</p>
          <h4>Behind the project</h4>
          <p>For more portfolio please navigate to: <br/><a href="https://github.com/ervandra" target="_blank" rel="noopener noreferrer">github.com/ervandra</a> | <a href="https://ervandra.github.io/codetober01">Codetober 01</a> | <a href="https://facebook.com/ervandra" target="_blank" rel="noopener noreferrer">Facebook</a></p>
          <h4>Available for hiring:</h4>
          <p><a href="https://www.ervandra.com" target="_blank" rel="noopener noreferrer">www.ervandra.com</a></p>
        </Body>
      </Content>
    );
  }
}

const Content = styled.div`
  background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
  min-height: 100vh;
`

const Header = styled.div`
  background: rgba(255,255,255,.2);
  text-align: center;
  color: #fff;
  padding: 2rem 1rem;
`

const Body = styled.div`
  text-align:center;
  padding: 2rem 1rem;
  color: #fff;
`


export default App;
