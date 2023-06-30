import React from 'react'
import loading from '../assests/Search.gif'
import loading2 from '../assests/Jumping letters.gif'

const Spinner=()=> {

    return (
      <div className="text-center ">
        <div className='d-inline-flex flex-column justify-content-center'>
            <img style={{width:'6rem',margin:'1rem 0px'}} src={loading} alt="" />
            <img style={{width:'6rem',margin:'1rem 0px'}} src={loading2} alt="" />
        </div>
      </div>
    )
}

export default Spinner
