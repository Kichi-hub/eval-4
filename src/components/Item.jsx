import React from 'react';

function Item({ item, deleteItem, editItem, toggleComplete }) {
    const handleDelete = () => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar "${item.value}"?`)) {
            deleteItem(item.id);
        }
    };

    const handleToggle= () => {
        toggleComplete(item.id);
    };

    return (
        <li>
            <span className={item.completed ? 'completed-text' : ''} onClick={handleToggle}>
                {item.value}
            </span>

            <div className="button-group">
            <button className="complete-btn" onClick={handleToggle}>
                {item.completed ? 'Desmarcar' : 'Completar'}
            </button>
            <button className="edit-btn" onClick={() => editItem(item)}>Editar</button>
            <button className="delete-btn" onClick={handleDelete}>Eliminar</button>
            </div>
        </li>
    );
}

export default Item;