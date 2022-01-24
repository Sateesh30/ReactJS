export const delStudents=(stdId)=>{
    return {
        type:'DELETESTUDENTS',
        payload:stdId
    }
}

export const addStudent = (student)=>{
    return{
        type:'ADDSTUDENT',
        payload:student
    }
}

export const searchStudentAction = (stdId)=>{
    return{
        type:'SEARCHSTUDENT',
        payload:stdId
    }

    
}

export const updateStudentAction = (student)=>{
    return{
        type:'UPDATESTUDENT',
        payload:student
    }

    
}