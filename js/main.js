let draggableCards = document.querySelectorAll('.draggable');
let dropArea = document.querySelectorAll(".dropArea");
let dropRect = document.getElementById("dropRect");
let closeModal = document.querySelector('.closeModal');
let modal = document.querySelector('#webDevModal');

let cardIsDragged = false;
let showModal = false;

draggableCards.forEach (card => {
    card.addEventListener('dragstart', () => {
        card.classList.add('draggingCard')
        dropRect.classList.add('dropRect');

})
    card.addEventListener('dragend', () => {
        card.classList.remove('draggingCard')
        dropRect.classList.remove('dropRect');

        if (cardIsDragged == true) {
            card.classList.add('PostDrag');
            card.classList.remove('PreDrag');
            cardIsDragged = false;
            modal.showModal();
        }
    })
})

dropArea.forEach (area => {
    area.addEventListener('dragover', event => {
        event.preventDefault();
        const draggingCard =document.querySelector('.draggingCard');
        area.appendChild(draggingCard);
        cardIsDragged = true;
    })
})

closeModal.addEventListener("click", () => {
    modal.close();
});
