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
        <div className="p-7 max-w-3xl mx-auto">
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <h1 className="text-2xl font-semibold mb-4 text-center">Todo List</h1>
                <div className="flex flex-col md:flex-row gap-3">
                    <input className="bg-gray-200 w-full md:w-auto flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"  
                        placeholder="Enter a task"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input className="bg-gray-200 w-full md:w-auto flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Enter the description"
                        value={Description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button onClick={handleAddUser} className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                        Add
                    </button>
                </div>
                
                <ul className="mt-6 space-y-4">
                    {todoss.map((tod) => (
                        <li key={tod.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <p className="text-lg font-semibold">{tod.Name}</p>
                            <p className="text-gray-600">{tod.Description}</p>
                            <div className="mt-3 flex gap-2">
                                <button onClick={() => handledit(tod)}
                                    className="bg-yellow-500 text-white px-4 py-1 rounded-md hover:bg-yellow-600 transition">
                                    Edit
                                </button>
                                <button onClick={() => handleDeleteuser(tod.id)}
                                    className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition">
                                    Delete
                                </button>
                            </div>
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
