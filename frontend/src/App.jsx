import { PingComponent } from './components/atoms/PingComponent';
import usePing from './hooks/apis/queries/usePing'

import { CreateProject } from './pages/CreateProject';
import { Routes, Route } from 'react-router-dom'


function App() {




  return (
    <>
      <Routes>
        <Route path='/' element={<CreateProject />}></Route>
      </Routes>
    </>
  )


}

export default App
