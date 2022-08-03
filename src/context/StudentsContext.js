import { createContext, useState } from 'react'

export const studentsContext = createContext()

function StudentsProvider({children}) {
    const [student,setStudent] = useState('');
    const [allStudents,setAllStudents] = useState([]);
    const [editMode,setEditMode] = useState(false);
    const [editable,setEditable] = useState(null);


  return (
    <studentsContext.Provider value={{student,setStudent,allStudents,setAllStudents,editMode,setEditMode,editable,setEditable}}>
        {children}
    </studentsContext.Provider>
  )
}

export default StudentsProvider