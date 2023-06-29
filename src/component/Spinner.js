import React, { Component } from 'react'
import loading from '../assests/Search.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img style={{width:'6rem',margin:'16rem 0px'}} src={loading} alt="" />
      </div>
    )
  }
}

export default Spinner
