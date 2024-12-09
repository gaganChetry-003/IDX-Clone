import { PingComponent } from './components/atoms/PingComponent';
import usePing from './hooks/apis/queries/usePing'
import { useState } from 'react';


function App() {

 const [isVisible,setisVisible]=useState(false);


 return (
  <>
  <button onClick={()=>setisVisible(!isVisible)}>Toggle</button>
  {
    isVisible && <PingComponent></PingComponent>
  }
  </>
 )

  
}

export default App
