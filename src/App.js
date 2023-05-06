import { BrowserRouter, Routes, Route } from "react-router-dom"
import BookLists from './components/BookLists';
import BookMoviePage from "./components/BookMoviePage";


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      
        <Routes>
          <Route path='/' element={<BookLists />} />
          <Route path='/bookPage/:id' element={<BookMoviePage />} />
    
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
