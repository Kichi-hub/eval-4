import React from 'react';

function Item({ item, deleteItem, editItem }) {
    const handleDelete = () => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar "${item.value}"?`)) {
            deleteItem(item.id);
        }
    };

    return (
        <li>
            {item.value}
            <button className="edit-btn" onClick={() => editItem(item)}>Editar</button>
            <button className="delete-btn" onClick={handleDelete}>Eliminar</button>
        </li>
    );
}

export default Item;