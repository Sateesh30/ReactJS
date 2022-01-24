import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { delStudents } from "../actions/StudActions";


function DeleteStudent() {

    let {id} = useParams();
    console.log(id);

    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(delStudents(parseInt(id)));
    },[]);

    return (<>
    <h2>student deleted succesfully</h2>
    
     <Navigate to="/students/showall"></Navigate>
    </>);
    
}

export default DeleteStudent;

























