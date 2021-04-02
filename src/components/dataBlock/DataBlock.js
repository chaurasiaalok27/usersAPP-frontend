import React, { useEffect, useState } from 'react';
import ListItem from '../listitem/ListItem';
// //const data = [{
//     "name":" user1",
//     "ability":"nothing",
//     "task":"complete the project and do it now"
// },
// {
//     "name":" user2",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// },
// {
//     "name":" user3",
//     "ability":"nothing",
//     "task":"complete the project"
// }
// ]


const DataBlock = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9999/users')
            .then((r) => r.json())
            .then((arr) => {
                setData(arr);
            });
    }, []);

    const editItemHandler = (editedValue, itemIdx) => {
        const idToEdit = data[itemIdx]._id;
        
	    fetch(`http://localhost:9999/user/${idToEdit}`, {
			method: "PUT",
			body: JSON.stringify({ task: editedValue }),
			headers: {
			"Content-Type": "application/json",
			},
		})
			.then((r) => r.json())
			.then((resp) => {
				console.log('Got edited', resp);
				data[itemIdx] = resp;
				setData([...data]);
			});
	};

    const deleteHandler = (itemIdx) => {
		const idToDelete = data[itemIdx]._id;
		fetch(`http://localhost:9999/user/${idToDelete}`, {
			method: "DELETE"
		})
			.then((r) => {
				console.log('Got Deleted');
				data.splice(itemIdx, 1);
				setData([...data]);
			});
	};


    return (
        <div className="main-container">
            {data.map((item, idx) => (
                <ListItem
                    item={item}
                    key={idx}
                    idx={idx}
                    editItemHandler={editItemHandler}
                    deleteHandler={deleteHandler}
                />
            ))}
        </div>
    )
}

export default DataBlock;