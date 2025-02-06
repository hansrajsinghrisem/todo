// src/components/TodoModal.js
import React from 'react';
import Modal from "react-modal";
Modal.setAppElement("#root");

function TodoModal({ isOpen, onRequestClose, Editname, setEditname, Editdescription, setEditdescription, handleUpdateUser }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <input
        type="text"
        placeholder="Enter a task"
        value={Editname}
        onChange={(e) => setEditname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the description"
        value={Editdescription}
        onChange={(e) => setEditdescription(e.target.value)}
      />
      <button onClick={handleUpdateUser}>update</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
}

export default TodoModal;
