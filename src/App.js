import { ShowStudents } from './ShowStudents/ShowStudents';
import NavBar from './NavBarComponent/NavBar'
import { Route, Routes } from 'react-router-dom';
import DeleteStudent from './ShowStudents/DeleteStudent';
import { SearchStudent } from './ShowStudents/SearchStudent';
import './App.css';
import AddStudent from './ShowStudents/AddStudent';
import Footer from './BottomNavigation/BottomNav';
import UpdateStudent from './ShowStudents/UpdateStudent';

function App() {
  return (
    <>
    <div className="App">
    <header>
      <NavBar></NavBar>
     
    </header>

   <Routes>
     <Route path="/students/showall" element={<ShowStudents/>}></Route>
     <Route path="/students/delete/:id" element={<DeleteStudent/>}></Route>
     <Route path="/students/add" element={<AddStudent/>}></Route>
     <Route path="/students/search/:id" element={<SearchStudent/>}></Route>
     <Route path="/students/update/:id" element={<UpdateStudent/>}></Route>
   </Routes>


    </div>
    <br></br>

    <Footer></Footer></>
  );
}

export default App;
