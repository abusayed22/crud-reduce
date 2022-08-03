import PresentStu from "./PresentStu";
import AbsentStu from "./AbsentStu";
import { studentsContext } from "../../context/StudentsContext";
import { useContext } from "react";

function AllStu(props) {
    const {setStudent,allStudents,setAllStudents,setEditMode,editable,setEditable} = useContext(studentsContext)

    const editHandler = (editId) => {
    setEditMode(true)
    const forEdit = allStudents.find(single => single.id === editId)
    setEditable(forEdit)
    setStudent(editable.name);
    }

    const deleteHandler = (deleteId) => {
        setAllStudents(allStudents.filter( single => single.id !== deleteId))
    }
    

    const presentHandler = (presenttId) => {
        const absentItem = allStudents.find(single => single.id === presenttId)
        if(absentItem.isPresent === true){
            alert("The student's already present list")
        } else if(absentItem.isPresent === false) {
            alert("The student's name already absent list")
        } else if ( absentItem.isPresent === undefined) {
            setAllStudents(allStudents.map( item => {
                if(item.id === presenttId) {
                    item.isPresent = true
                }
                
                return item
            }))
        }
    }
    const absentHandler = (absentId) => {
        const finding = allStudents.find((single) => single.id === absentId)
        if(finding.isPresent === true) {
            alert("The student's already present list")
        } else if (finding.isPresent === false) {
            alert("The student's name already absent list")
        } else if (finding.isPresent === undefined) {
           setAllStudents(allStudents.map( student => {
            if(student.id === absentId) {
                student.isPresent = false
            }
        
            return student
           }))
         }
    }

    // const toggleAction = 

  return (
    <>
    <div style={{width:'500px',marginTop:'40px'}}>
            

        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Name</th>
                    <th className='text-center'>Action</th>
                </tr>
                </thead>
                {allStudents.map(item => (
                <tbody key={item.id}>
                    <tr>
                        <td>{item.name}</td>
                        <td>
                            <button onClick={() => editHandler(item.id)} className="btn btn-sm ml-2 btn-primary">Edit</button>
                            <button onClick={() => deleteHandler(item.id)} className="btn btn-sm ml-2 btn-secondary">Delete</button>
                            <button onClick={() => presentHandler(item.id)} className="btn btn-sm ml-2 btn-accent">Present</button>
                            <button onClick={() => absentHandler(item.id)} className="btn btn-sm ml-2">Absent</button>
                        </td>
                    </tr>
                </tbody>
                ))}
                
            </table>
        </div>

        
                  
                
            
    </div>
        <div style={{display:'flex',justifyContent:'space-around',marginTop:'30px'}}>
            <div style={{width:'400px',border:'1px solid green'}}>
                {<PresentStu 
                    allStudents = {allStudents}
                    setAllStudents = {setAllStudents}
                />}
            </div>
            <div style={{width:'400px',border:'1px solid red'}}>
                {<AbsentStu 
                    allStudents = {allStudents}
                    setAllStudents = {setAllStudents}
                />}
            </div>
        </div>
    </>
 
)}
export default AllStu
