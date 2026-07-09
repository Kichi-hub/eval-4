import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  // Solución óptima: Cargamos de localStorage directamente al inicializar el estado
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('items');
    return storedItems ? JSON.parse(storedItems) : [];
  });
  
  const [itemToEdit, setItemToEdit] = useState(null);

  // Sincroniza con localStorage cada vez que cambien los items
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      // Update existing item
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, value } : item));
      setItemToEdit(null);
    } else {
      // Add new item
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

  // El return ahora pertenece legítimamente al componente App
  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;