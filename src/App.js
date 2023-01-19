import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <Form></Form>
    </div>
  );
}

export default App;
