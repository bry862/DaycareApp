import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChildPage from "./ChildPage";




import ChildScrollMenu from './ChildScrollMenu'

import './App.css'
import NavBar from "./NavBar";
import HomePage from "./HomePage";



function App() {
 

  return (
    <BrowserRouter>
      <div className="flex h-screen flex-col">
          <NavBar/>

          <main className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-6xl p-4">
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/children" element={<ChildScrollMenu />} />
                <Route path="/children/:childId" element={<ChildPage />} />
              </Routes>
            </div>
        </main>
      </div>
      
    </BrowserRouter>

    
  )
   
}

export default App
