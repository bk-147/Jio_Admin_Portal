import './App.css';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom"
import Login from './login/login';
import Sidebar from './dashboard/Sidebar/Sidebar';
import Navbar from './dashboard/navbar';
import Tables from './dashboard/Tables/Tables';
import Chart1 from './dashboard/Charts/Chart1';
import Dashboard from './dashboard/dashboard';
import Profile from './dashboard/Profile/Profile';

function App() {  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <>
            <Dashboard/>
          </>
        } />
        <Route path="/dashboard/tables" element={
          <Tables />
        } />
        <Route path="/dashboard/profile" element={
          <Profile />
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
