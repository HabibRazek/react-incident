import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Register from './Components/Register';
import Side from './Components/SideUser';
import UserTab from './Components/UserTab';
import SideIncident from './Components/SideIncident';
import Stats from './Components/Stats';
import DeclareIncident from './Components/DeclareIncident';
import ListIncident from './Components/ListIncident';
import Contact from './Components/Contact';
import SideMsg from './Components/SideMsg';
import AddUser from './Components/AddUser';
import SideAddUser from './Components/SideAddUser';
import ModifyUser from './Components/ModifyUser';
import SideModifyUser from './Components/SideModifyUser';
import AddIncident from './Components/AddIncident';
import SideAddIncident from './Components/SideAddIncident';
import ModifyIncident from './Components/ModifyIncident';
import SideModifyIncident from './Components/SideModifyIncident';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/side" element={<Side />} />
        <Route path="/usertab" element={<UserTab />} />
        <Route path="/sideincident" element={<SideIncident />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/menu" element={<ListIncident />} />
        <Route path="/declare" element={<DeclareIncident />} />
        <Route path="/listincident" element={<ListIncident />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/msg" element={<SideMsg />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/sideadduser" element={<SideAddUser />} />
        <Route path="/modifyuser/:id" element={<ModifyUser />} />
        <Route path="/sidemodifyuser/:id" element={<SideModifyUser />} />
        <Route path="/addincident" element={<AddIncident />} />
        <Route path="/addsideincident" element={<SideAddIncident />} />
        <Route path="/modifyincident" element={<ModifyIncident />} />
        <Route path="/sidemodifyincident" element={<SideModifyIncident />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
