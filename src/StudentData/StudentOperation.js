import {Student} from './Student';

export class StudentOperation{
    studArray=new Set();
    
    constructor(){
        this.studArray.add(new Student(100,'Mark','CSE','TY'));
        this.studArray.add(new Student(200,'Elon','ECE','TY'));
    
    }
    
    getAllStudents(){
        console.log(this.studArray);
        return [...this.studArray];
    }

    addStudent(stu){
        console.log("=====add method=======");
        let newStud = new Student(parseInt(stu.stuId),stu.stuName,stu.stuDept,stu.stuYear);
        this.studArray.add(newStud);
   
        return [...this.studArray];
    }

    searchStudent(stuId){
        return [...this.studArray].find((student)=>student.stuId===stuId);
    }
    deleteStudent(stuId){
        let student=this.searchStudent(stuId);
        this.studArray.delete(student);
        console.log(this.studArray);
        return [...this.studArray];

    }

    updateStudent(stu){
        let stuId= parseInt(stu.stuId);
        let newStu = new Student(parseInt(stu.stuId),stu.stuName,stu.stuDept,stu.stuYear);
        let student=this.searchStudent(stuId);
        this.studArray.delete(student);
        this.studArray.add(newStu);
        
        return [...this.studArray];
    }
}