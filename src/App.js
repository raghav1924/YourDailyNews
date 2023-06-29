import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  //  c='john';
  render() {
    //  let j='also work inside render as javascript'
    let pageSize=15;
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        {/* <News pageSize={pageSize} country='in' category='sports'/> */}
        <Routes>
          <Route exact path='/'element={<News key='genral' pageSize={pageSize} country='in' category='general' heading='Top Headline'/>}></Route>
          <Route exact path='/business'element={<News key='business' pageSize={pageSize} country='in' category='business' heading='Business News'/>}></Route>
          <Route exact path='/entertainment'element={<News key='entertainment' pageSize={pageSize} country='in' category='entertainment' heading='Entertainment News'/>}></Route>
          <Route exact path='/general'element={<News key='general' pageSize={pageSize} country='in' category='general' heading='General News'/>}></Route>
          <Route exact path='/health'element={<News key='health' pageSize={pageSize} country='in' category='health' heading='Health News'/>}></Route>
          <Route exact path='/science'element={<News key='science' pageSize={pageSize} country='in' category='science' heading='Science News'/>}></Route>
          <Route exact path='/sports'element={<News key='sports' pageSize={pageSize} country='in' category='sports' heading='Sports News'/>}></Route>
          <Route exact path='/technology'element={<News key='technology' pageSize={pageSize} country='in' category='technology' heading='Technology News'/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

