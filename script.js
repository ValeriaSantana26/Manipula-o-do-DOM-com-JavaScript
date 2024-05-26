// Esta função é executada quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos do HTML pelos seus IDs
    const addItemButton = document.getElementById("addItemButton");
    const changeColorButton = document.getElementById("changeColorButton");
    const removeItemButton = document.getElementById("removeItemButton");
    const itemList = document.getElementById("itemList");

    // Adiciona um evento de clique para adicionar um novo item à lista
    addItemButton.addEventListener("click", function() {
        // Cria um novo item de lista (li)
        const newItem = document.createElement("li");
        // Calcula o número de itens na lista e adiciona um novo item com o número atual incrementado
        const itemCount = itemList.children.length + 1;
        newItem.textContent = "Item " + itemCount;
        itemList.appendChild(newItem);
    });

    // Adiciona um evento de clique para alterar a cor dos itens da lista
    changeColorButton.addEventListener("click", function() {
        // Seleciona todos os itens da lista
        const items = document.querySelectorAll("#itemList li");
        // Para cada item, gera uma cor aleatória e define como sua cor de fundo
        items.forEach(function(item) {
            // Gera uma cor aleatória em formato hexadecimal
            const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            // Define a cor de fundo do item como a cor aleatória gerada
            item.style.backgroundColor = randomColor;
        });
    });

    // Adiciona um evento de clique para remover o último item da lista
    removeItemButton.addEventListener("click", function() {
        // Seleciona o último item da lista
        const lastItem = itemList.lastElementChild;
        // Se houver um último item, remove-o da lista
        if (lastItem) {
            itemList.removeChild(lastItem);
        }
    });
});
