import React, { useState } from 'react';

const Information = () => {

    const [name,setName] = useState('');
    const [ability,setAbility] = useState('');
    const [task,setTask] = useState('');

    const dataHandler = () => {
        console.log(JSON.stringify({ userName: name, ability: ability, task: task }));
		fetch('http://localhost:9999/user', {
			method: "POST",
			body: JSON.stringify({ userName: name, ability: ability, task: task}),
			headers: {
				"Content-Type": "application/json",
			}
		})
			.then((r) => r.json())
			.then((resp) => {

				console.log("got data", resp);
			});
    }

    return (
        <div className="main-container">
            <div className="first-container">
                <div className="upper-container">
                    <div className="name-container">
                    <label>Name: </label>
                    <input
                        name="userName"
                        className="input-name"
                        type="text"
                        placeholder="Enter Name"
                        onChange={e => setName(e.target.value)}
                    />
                    </div>
                    <div className="ability-container">
                    <label>Ability: </label>
                    <input
                        name="ability"
                        className="input-name"
                        type="text"
                        placeholder="Enter Ability"
                        onChange={e => setAbility(e.target.value)}
                    />
                    </div>
                </div>
                <div className="lower-container">
                    <label>Task: </label>
                    <input
                        name="task"
                        className="input-task"
                        type="text"
                        placeholder="Enter Task"
                        onChange={e => setTask(e.target.value)}
                    />
                </div>
            </div>
            <div className="second-container">
                <button className="input-btn" onClick={dataHandler} disabled={name.trim().length===0 || ability.trim().length === 0}>Enter Data</button>
            </div>
        </div>
    )
}

export default Information;