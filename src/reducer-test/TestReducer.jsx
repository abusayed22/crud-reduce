import { useReducer } from "react"

const reducer = (state,action) => {
    switch (action) {
        case "inc":
            return state + 1
            break;

        case "dic":
            return state -1
            break;
    
        default:
            return state ;
            break;
    }
}
const initialState = 6

function TestReducer() {

    const [counter, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <center>
            <center><b>counter:{counter}</b></center>
            <button type="button" onClick={() => dispatch("inc")}>inc</button> <br />
            <button type="button" onClick={() => dispatch("dic")}>dic</button>
        </center>
    </div>
  )
}

export default TestReducer