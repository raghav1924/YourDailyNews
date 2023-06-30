import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  //  c='john';
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    //  let j='also work inside render as javascript'
    let pageSize=5;




    return (
      <div>
        <BrowserRouter>
        <Navbar/>
      <LoadingBar
        color='#23986f'
        progress={this.state.progress}
        onLoaderFinished={()=>this.setProgress(0)}
      />
        {/* <News setProgress={this.setProgress}pageSize={pageSize} country='in' category='sports'/> */}
        <Routes>
          <Route exact path='/'element={<News setProgress={this.setProgress}key='genral' pageSize={pageSize} country='in' category='general' heading='Top Headline'/>}></Route>
          <Route exact path='/business'element={<News setProgress={this.setProgress}key='business' pageSize={pageSize} country='in' category='business' heading='Business News'/>}></Route>
          <Route exact path='/entertainment'element={<News setProgress={this.setProgress}key='entertainment' pageSize={pageSize} country='in' category='entertainment' heading='Entertainment News'/>}></Route>
          <Route exact path='/general'element={<News setProgress={this.setProgress}key='general' pageSize={pageSize} country='in' category='general' heading='General News'/>}></Route>
          <Route exact path='/health'element={<News setProgress={this.setProgress}key='health' pageSize={pageSize} country='in' category='health' heading='Health News'/>}></Route>
          <Route exact path='/science'element={<News setProgress={this.setProgress}key='science' pageSize={pageSize} country='in' category='science' heading='Science News'/>}></Route>
          <Route exact path='/sports'element={<News setProgress={this.setProgress}key='sports' pageSize={pageSize} country='in' category='sports' heading='Sports News'/>}></Route>
          <Route exact path='/technology'element={<News setProgress={this.setProgress}key='technology' pageSize={pageSize} country='in' category='technology' heading='Technology News'/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

