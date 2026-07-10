import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
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
        if (inputValue.trim() === '') {
            alert('No se permiten elementos vacíos o con solo espacios.'); // ← aviso al usuario
            return;
        }
        addOrUpdateItem(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ingresa un nuevo elemento..."
            />
            <button type="submit">Agrega o Actualiza Item</button>
        </form>
    );
}

export default Form;