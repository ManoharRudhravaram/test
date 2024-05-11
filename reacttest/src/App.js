import React, { useState } from 'react'

function App() {
  let [text,setText]=useState('')
  return (
    <div>
      {/* <p>Hello react application</p>
      <h4>text test</h4>
      <img title='pikachu' alt='pikachu' src='https://w0.peakpx.com/wallpaper/165/54/HD-wallpaper-sad-pikachu-cartoon-coffee-cup-drawings-morning-pokemon-yellow-thumbnail.jpg'/>
      {/* <input type='text' placeholder='enter user name' name='user name' readOnly value='manohar' id='username' className='username1'/> */}
      {/* <input type='password' placeholder='enter password' name='password' id='password'/>  */}
    <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}} placeholder='enter text'/>
    </div> 
  )
}

export default App