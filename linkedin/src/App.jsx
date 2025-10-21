import { useState } from 'react'


function App() {
  return( 
  <div style={{backgroundColor:'tomato',height:'100vh',margin:0}}>
    <div style={{display:'flex',justifyContent:'center',paddingTop:20}}>
      <div>
        <div>
            <PostComponent/>
        </div>
        <br></br>
        <div>
            <PostComponent/>
        </div>

  </div>
  </div>
  </div>
  

  )
}
function PostComponent(){
  
  let style={backgroundColor:"white",width:200,borderRadius:3,borderColor:"black",borderWidth:1,padding:20}
  let img='https://media.licdn.com/dms/image/v2/D4D03AQG_AwK3WLVDAA/profile-displayphoto-shrink_100_100/B4DZaQ1Ja9H0AU-/0/1746186573711?e=1762387200&v=beta&t=Imkp5ke92xfyU_UxEFrky01cGcOo9zJghBJ0QyFprzo'
  return(
    <>
    <div style={style}>
<div style={{display:'flex'}}>
    <img src={img} style={{width:30,height:30,borderRadius:50}}></img>
    <div style={{fontSize:10,marginLeft:5}}>
    <b>
      murali
    </b>
    |<div>followers 2000</div>
    <div>22m</div>
    </div>
   </div>
 <div style={{fontSize:12,marginTop:2}}>do you know how win big?</div>
 <div></div> <img src={img} style={{paddingTop:8}}></img></div> 

    </>
  )
}

export default App;