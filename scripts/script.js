const textArea = document.querySelector(".notebook-input")
const newNote = document.querySelector(".add-note")
const removeInput = document.querySelector(".remove-input")
const noteData = document.querySelector(".notebook-data")

newNote.addEventListener("click", () => {
    let userText = textArea.value;

    if (userText.trim() === "") {
        const inputIsEmpty = document.createElement("p")
        inputIsEmpty.textContent = "Поле ввода не может быть пустым"
        textArea.insertAdjacentElement('afterend', inputIsEmpty);

        setTimeout(() => inputIsEmpty.remove(), 2500);

        return;
    }
    else {
        const noteItem = document.createElement("li")
        noteItem.textContent = userText
        noteData.append(noteItem)

        const removeNote = document.createElement("button")
        removeNote.textContent = "Удалить заметку"
        removeNote.className = "remove-note"

        removeNote.addEventListener("click", () => {
            removeNote.remove()
            noteItem.remove()
        })
        noteItem.insertAdjacentElement("afterend", removeNote)
    }
})

removeInput.addEventListener("click", () => {
    textArea.value = "";
})