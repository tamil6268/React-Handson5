import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Tables from '../Components/Tables'
import ContactUs from '../Components/ContactUs';
import Error from '../Components/Error';
import Nav from '../Components/Nav';
import { useState } from 'react';
// import { createContext } from 'react';
import DataContext from '../Components/DataContext'
import EditPage from '../Components/EditPage';
import AddPage from '../Components/AddPage';

function Area() {
  const [data, setData] = useState([
    {
      Name: 'Name1',
      Age: 20,
      Course: 'MERN',
      Batch: 'September',
    },
    {
      Name: 'Name2',
      Age: 23,
      Course: 'MERN',
      Batch: 'November',
    }
  ])
  
  return (
    <div id="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Students" element={
            <DataContext.Provider value={{ entries: data, updateFunction: setData }}>
            <Tables />
          </DataContext.Provider>
          }></Route>
          <Route path="/EditPage" element={
            <DataContext.Provider value={{ entries: data, updateFunction: setData }}>
              <EditPage />
            </DataContext.Provider>
          }></Route>
          <Route path="/AddPage" element={
            <DataContext.Provider value={{ entries: data, updateFunction: setData }}>
              <AddPage />
            </DataContext.Provider>
          }></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Area;