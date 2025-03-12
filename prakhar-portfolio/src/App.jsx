import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { NotFound } from './pages/NotFound'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
                                <h1 className="text-3xl font-bold underline">Here's a header</h1>
                                <section className="bg-emerald-600 p-4 m-3">
                                  <p className="text-indigo-900 text-center">
                                    Here's some content going in a section underneath that header
                                  </p>
                                </section>
                              </>} 
        />
        {/* <Route path="/*" element={<NotFound />} /> */}
        {/* new routes go here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
