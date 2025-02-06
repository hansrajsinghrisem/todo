import React from 'react';
import Modal from "react-modal";
Modal.setAppElement("#root");

function TodoModal({ isOpen, onRequestClose, Editname, setEditname, Editdescription, setEditdescription, handleUpdateUser }) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      className="bg-white p-6 rounded-lg shadow-lg w-96 mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="text-xl font-semibold mb-4">Edit Todo</h2>
      <input
        type="text"
        className="bg-gray-200 w-full px-4 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a task"
        value={Editname}
        onChange={(e) => setEditname(e.target.value)}
      />
      <input
        type="text"
        className="bg-gray-200 w-full px-4 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter the description"
        value={Editdescription}
        onChange={(e) => setEditdescription(e.target.value)}
      />
      <div className="flex gap-3">
        <button 
          onClick={handleUpdateUser} 
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition w-full">
          Update
        </button>
        <button 
          onClick={onRequestClose} 
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition w-full">
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default TodoModal;
