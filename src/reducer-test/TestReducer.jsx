import { useReducer } from "react"

const reducer = (intialState, action) => {
    switch (action.type) {
        case "Increment":
            return {count: intialState.count + action.payload}
            break;

        case "Diccrement":
            return {count:intialState.count - action.payload}
            break;
    
        default:
            return intialState;
            break;
    }
}

const intialState = {
    count:10,
}

function TestReducer() {
    const [counter, dispatch] = useReducer(reducer, intialState) 


  return (
    <div style={{margin:'20px'}}>
        <center>
        <center><b>{counter.count}</b></center>
        <button onClick={() => dispatch({type:"Increment",payload:3})} className="btn btn-sm btn-active btn-primary">Increment</button>
        <button onClick={() => dispatch({type:"Diccrement",payload:3})} className="btn btn-sm btn-active btn-accent">Diccrement</button>
        </center>
    </div>
  )
}

export default TestReducer