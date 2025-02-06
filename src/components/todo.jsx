// src/components/Ttodo.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "../features/todoslice";
import TodoModal from "./TodoModal";  // Import the TodoModal component

function Ttodo() {
    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [Editname, setEditname] = useState("");
    const [Editdescription, setEditdescription] = useState("");
    const dispatch = useDispatch();
    const todoss = useSelector((state) => state.todo.todos);
    const [editmodal, seteditmodal] = useState(false);
    const [editId, setEditId] = useState(null);

    function handleAddUser() {
        dispatch(addTodo({ id: Date.now(), Name, Description }));
        setName("");
        setDescription("");
    }

    function handleDeleteuser(id) {
        dispatch(removeTodo(id));
    }

    function handledit(tod) {
        setEditname(tod.Name);
        setEditdescription(tod.Description);
        setEditId(tod.id);
        seteditmodal(true);
    }

    function handleUpdateUser() {
        dispatch(editTodo({ id: editId, Name: Editname, Description: Editdescription }));
        seteditmodal(false);
    }

    return (
        <div className="p-7">
            <div>
                <h1 className="">Todo List</h1>
                <input className="bg-slate-200 m-3 px-4 py-1 rounded-lg"
                    type="text"
                    name="todo"
                    placeholder="Enter a task"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input className="bg-slate-200  m-3 px-4 py-1 rounded-lg"
                    type="text"
                    name="todo"
                    placeholder="Enter the description"
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={handleAddUser}>Add</button>
                <ul>
                    {todoss.map((tod) => (
                        <li key={tod.id}>
                            name: {tod.Name}
                            <br />
                            description: {tod.Description}
                            <button className="bg-slate-200  m-3 px-4 py-1 rounded-lg" onClick={() => handledit(tod)}>edit</button>
                            <button className="bg-slate-200  m-3 px-4 py-1 rounded-lg" onClick={() => handleDeleteuser(tod.id)}>delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Use the TodoModal component here */}
            <TodoModal
                isOpen={editmodal}
                onRequestClose={() => seteditmodal(false)}
                Editname={Editname}
                setEditname={setEditname}
                Editdescription={Editdescription}
                setEditdescription={setEditdescription}
                handleUpdateUser={handleUpdateUser}  
            />
        </div>
    );
}

export default Ttodo;
