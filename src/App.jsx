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
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const addOrUpdateItem = (value) => {
        if (itemToEdit) {
            setItems(items.map(item => item.id === itemToEdit.id ? { ...item, value } : item));
            setItemToEdit(null);
        } else {
            const newItem = { id: Date.now(), value, completed: false };
            setItems([...items, newItem]);
        }
    };

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const editItem = (item) => {
        setItemToEdit(item);
    };

    const toggleComplete = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    const deleteAll = () => {
        if (items.length === 0) return;
        if (window.confirm('¿Estás seguro de que deseas eliminar TODOS los elementos?')) {
            setItems([]);
        }
    };

    const filteredItems = items.filter(item =>
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="App">
            <h1>CRUD con LocalStorage</h1>
            <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
            {/* Contador de elementos */}
            <p>Total de elementos: {items.length}</p>
            <input
                type="text"
                placeholder="Buscar elementos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="delete-all-btn" onClick={deleteAll}>
                Borrar todo
            </button>
            <List items={filteredItems} deleteItem={deleteItem} editItem={editItem} toggleComplete={toggleComplete} />
        </div>
    );
}

export default App;