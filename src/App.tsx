import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { Home, About, Error404 } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
