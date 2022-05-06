import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Comics from './components/Comics/Comics';
import { 
  BrowserRouter,
  Routes, 
  Route
} from 'react-router-dom';
import Layout from './components/Layout';

class App extends React.Component {
  constructor(props){
     super(props);
     this.state = {}
  }
  render(){
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path="/" element={<Hero />} />
              <Route path="comics/:id" element={<Comics />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;