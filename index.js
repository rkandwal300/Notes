function addNote() {
    const noteText = document.getElementById('noteText').value.trim();
    if (noteText === '') {
      alert('Please write something!');
      return;
    }
  
    const notesContainer = document.getElementById('notesContainer');
  
    const note = document.createElement('div');
    note.className = 'note';
  
    const noteContent = document.createElement('div');
    noteContent.className = 'note-content';
    noteContent.innerHTML = `<p>${noteText}</p>`;
  
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'note-buttons';
  
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.onclick = () => editNote(noteContent);
  
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.onclick = () => note.remove();
  
    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);
  
    note.appendChild(noteContent);
    note.appendChild(buttonsDiv);
  
    notesContainer.appendChild(note);
  
    document.getElementById('noteText').value = '';
  }
  
  function editNote(noteContentElement) {
    const oldText = noteContentElement.querySelector('p').innerText;
    const newText = prompt('Edit your note:', oldText);
    if (newText !== null && newText.trim() !== '') {
      noteContentElement.querySelector('p').innerText = newText.trim();
    }
  }
  