const addNoteBtn = document.getElementById('addNoteBtn');
const notesRow = document.getElementById('notesRow');

let notes = [];

addNoteBtn.addEventListener('click', () => {
    if (notes.length >= 3) {
        alert("You can only create 3 notes!");
        return;
    }

    const note = {
        content: ''
    };
    notes.push(note);
    renderNotes();
});

function renderNotes() {
    notesRow.innerHTML = '';

    notes.forEach((note, index) => {
        const card = document.createElement('div');
        card.className = 'note-card';

        const textarea = document.createElement('textarea');
        textarea.value = note.content;
        textarea.placeholder = "Write your note...";

        textarea.addEventListener('input', () => {
            notes[index].content = textarea.value;
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            notes.splice(index, 1);
            renderNotes();
        });

        card.appendChild(textarea);
        card.appendChild(deleteBtn);

        notesRow.appendChild(card);
    });
}
