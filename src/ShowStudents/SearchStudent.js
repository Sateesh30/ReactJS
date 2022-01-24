import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ShowStudents } from "./ShowStudents";
import { styled } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { tableCellClasses } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { Paper } from "@material-ui/core";

import './SearchStudent.css';



  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 4,
    },
  }));
  
 
export function SearchStudent(){
    let dispatch=useDispatch();
    let {id}=useParams()
    let [stu,setArr]=useState([]);
    let arr = useSelector((state)=>state.StudReducer);
    
    
    
    useEffect(()=>{
    
        setArr(arr)
    },[])

    console.log(arr);
    return(
        <TableContainer component={Paper} className="myTable">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead className="TableHead">
            <TableRow className="TableRow">
              <TableCell  >ID </TableCell>
              <TableCell align="right"  >Name</TableCell>
              <TableCell align="right">Branch</TableCell>
              <TableCell align="right">Year</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody >
            {arr.map((student) => 
                {
                    return(
                        (student.stuId==id)?
              <StyledTableRow key={student.stuId}>
                <TableCell component="th" scope="row">
                  {student.stuId}
                </TableCell>
                <TableCell align="right">{student.stuName}</TableCell>
                <TableCell align="right">{student.stuDept}</TableCell>
                <TableCell align="right">{student.stuYear}</TableCell>
              
              </StyledTableRow>:<></>
            )
            })
            }
          </TableBody>
        </Table>
        </TableContainer>
    )
}








{/*   <>
        <table className="table" id="nt">
            {
                arr.map((student)=>{
                    return(
                       (student.stuId==id)?
                        <tr key={student.stuId}>
                            <td>{student.stuId}</td>
                            <td>{student.stuName}</td>
                            <td>{student.stuDept}</td>
                            <td>{student.stuYear}</td>
                            
                            
                        </tr>:<></>
                        
                    );
                })
            }
            </table>
        </> */}