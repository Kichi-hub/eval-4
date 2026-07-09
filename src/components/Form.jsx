import React, { useState, useEffect } from 'react';

function Form ({addOrUpdateItem, itemToEdit}) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (itemToEdit) {
            setInputValue(itemToEdit.value);
        } else {
            setInputValue('');
        }
    }, [itemToEdit]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return; // Evita agregar tareas vacías
        addOrUpdateItem(inputValue);
        setInputValue(''); // Limpia el input después de agregar o actualizar
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a new item..."
            />
            <button type="submit">Agrega o Actualiza Item</button>
        </form>
    );
}

export default Form;