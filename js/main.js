let draggableCards = document.querySelectorAll('.draggable');
let dropArea = document.querySelectorAll(".dropArea");
let dropRect = document.getElementById("dropRect");
let closeWDModal = document.querySelector('#close-WD-Modal');
let closeBEModal = document.querySelector('#close-BE-Modal');
let closeFEModal = document.querySelector('#close-FE-Modal');
let modal1 = document.querySelector('#webDevModal');
let modal2 = document.querySelector('#backEndModal');
let modal3 = document.querySelector('#frontEndModal');

let cardIsDragged = false;
let showModal = [false,false,false];
let id = 0;

draggableCards.forEach (card => {
    card.addEventListener('dragstart', () => {
        card.classList.add('draggingCard');
        dropRect.classList.add('dropRect');

})
    card.addEventListener('dragend', () => {
        card.classList.remove('draggingCard');
        dropRect.classList.remove('dropRect');

        if (cardIsDragged == true) {
            id ++;
            card.classList.add(`PostDrag-${id}`);
            card.classList.remove('PreDrag');
            cardIsDragged = false;
                console.log(id);
            switch (id) {
                case 1:
                    modal1.showModal();
                    break;
                case 2:
                    modal2.showModal();
                    break;
                case 3:
                    modal3.showModal();
                    break;
                default: console.log("No card");
                    break;
            }
            
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

closeWDModal.addEventListener("click", () => {
    modal1.close();
});

closeBEModal.addEventListener("click", () => {
    modal2.close();
});

closeFEModal.addEventListener("click", () => {
    modal3.close();
});
