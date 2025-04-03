function addItem() {
    const input = document.getElementById('itemInput');
    const itemText = input.value.trim();
    
    if (itemText === '') {
        alert('Por favor, escribe un producto');
        return;
    }
    
    const list = document.getElementById('shoppingList');
    const listItem = document.createElement('li');
    
    listItem.innerHTML = `
        <span>${itemText}</span>
        <button onclick="removeItem(this)">Eliminar</button>
    `;
    
    list.appendChild(listItem);
    input.value = '';
    input.focus();
}

function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}