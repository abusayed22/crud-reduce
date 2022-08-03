import AllStu from './AllStu';
import { useContext } from 'react';
import { studentsContext } from '../../context/StudentsContext';

function AddStu(props) {
    const {allStudents,setAllStudents,student,setStudent,editable,setEditMode,editMode} = useContext(studentsContext)

    const addHandler=(e) => {
        e.preventDefault();
        const newAllStudents = {
            id: Date.now(),
            name:student,
            isPresent:undefined
        }
        setAllStudents([...allStudents,newAllStudents])
        setStudent("")
        if(student === "") {
            alert("please type student's name in input")
            return 
        }
    } 

    const updateHandler = (e) => {
        e.preventDefault();
        setAllStudents(allStudents.map( single => {
            if(single.id === editable.id) {
                single.name = student
            }

            return single
        }))
        setStudent(" ")
        setEditMode(false)
        console.log(editable.id);

        if(student === '') {
            alert("please type student's name in input")
            return 
        }
    }


  return (
    <div>
        <center>
            <div className="form-control mt-10 w-full max-w-xs">
                <label className="label">
                    <span className="label-text"><b>What is student name?</b></span>
                </label>
                <form onSubmit={(e) => editMode? updateHandler(e) : addHandler(e) }>
                <input
                    value={student}
                    onChange= {(e) => setStudent(e.target.value)}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    style={{outline:'none'}}
                />
                <button type='onSubmit' className="btn btn-sm btn-wide">{editMode? "update Student" : "Add student"}</button>
                </form>
                
            </div>
        </center>
       <center>

        <AllStu />

       </center>
       
    </div>
  )
}

export default AddStu
