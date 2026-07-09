import React from 'react';

function Item({ item, deleteItem, editItem }) {
    return (
        <li>
            {item.value}
            <button className="edit-btn" onClick={() => editItem(item)}>Editar</button>
            <button className="delete-btn" onClick={() => deleteItem(item.id)}>Eliminar</button>
        </li>
    );
}

export default Item;