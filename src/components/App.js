import React, {useState} from "react";
import "./App.css";

function App() 
{
	const [tasks,setTasks]=useState([]);
    const [text,setText]=useState("");
    const [si,setSi]=useState(-1);
	const [edit,setEdit]=useState("");
	
	const addTask = (title) =>{
		if(title!=""){
		const newT=[...tasks,{title}];
        setTasks(newT);
        setText("");
		}
        
    };
    const deleteTask = (index) =>{
        const newT=[...tasks];
        newT.splice(index,1);
        setTasks(newT)
	};
	
	const changeTask = (event) =>{
		setText(event.target.value);
	}
	const submitTask = (event) =>{
		// event.preventDefault();
		if(!edit) return;
		const newT=[...tasks];
		newT[si].title=edit;
		setTasks(newT);
        setEdit("");
        setText("");
		setSi(-1);
	};
   
	return (
		<div id="main">
		<textarea type="text" id="task" onChange={changeTask}  placeholder="Add a new task..."></textarea>
		<button type="button" id="btn" onClick={()=>addTask(text)}>Add</button>
		<ol>
		{
			tasks.map((task,index)=>(
				<li key={index}>
					<>
                        <span className="list">{task.title}</span>
					<button className="edit" onClick={()=>{setSi(index)}}>Edit</button>					
					<button id={index} className="delete" onClick={()=>deleteTask(index)}>Delete</button>
                    </>
					{
						(si===index)?
						<>
							<textarea className="editTask" type="text" id="editedTask" onChange={(evt)=>{setEdit(evt.target.value)}} ></textarea>
							<button className="saveTask" type="button" id="submit" onClick={submitTask}>Submit</button>
						</>
						:(null)
					}
				</li>
			))
		}
		</ol>
	</div>
	);
}


export default App;
