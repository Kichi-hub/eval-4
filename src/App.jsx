import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('items');
        return storedItems ? JSON.parse(storedItems) : [];
    });

    const [itemToEdit, setItemToEdit] = useState(null);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const addOrUpdateItem = (value) => {
        if (itemToEdit) {
            setItems(items.map(item => item.id === itemToEdit.id ? { ...item, value } : item));
            setItemToEdit(null);
        } else {
            const newItem = { id: Date.now(), value };
            setItems([...items, newItem]);
        }
    };

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const editItem = (item) => {
        setItemToEdit(item);
    };

    return (
        <div className="App">
            <h1>CRUD con LocalStorage</h1>
            <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
            {/* Contador de elementos */}
            <p>Total de elementos: {items.length}</p>
            <List items={items} deleteItem={deleteItem} editItem={editItem} />
        </div>
    );
}

export default App;