// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FormComponent from './components/form';
import Navbar from './components/navbar';

function App() {
  return (
    <div className=' w-full flex h-screen overflow-x-hidden overflow-y-auto flex-col items-center ' >
      <div className=' w-full sticky z-50 top-0 ' >
        <Navbar />
      </div>
      <div className=' w-full max-w-[1440px] pt-10 px-4 flex flex-col items-center '  >
        <div className=' w-fit mx-auto flex flex-col items-center ' >
          <FormComponent />
        </div>

      </div>
    </div>
  );
}

export default App;
