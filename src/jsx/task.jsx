import React, { useState } from "react";
import { Input } from "reactstrap";
import './task.css';

const Task = ({task})=>{
    const [cut,setCut] = useState(false);

    

    return(<>
    <div className="taskman">
        <div className="single-task">
        <Input className="chkbox-task" type="checkbox" onChange={(e) => setCut(e.target.checked)} />
        <p style={cut?{'text-decoration':'line-through'}:{'text-decoration':'none'}}>{task}</p>
        </div>
    </div>
    </>)
}

export default Task;