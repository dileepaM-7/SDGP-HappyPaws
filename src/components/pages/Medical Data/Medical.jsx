import React, { useState }  from 'react'
import './Medical.css'
import { Navbar } from '../../NavigationBar/Navbar';
import Footer from '../../Footer/Footer';

const Medical = () => {
  const [notes, setNotes] = useState([]);
  const [pdfs, setPdfs] = useState([]);
  const [editingNote, setEditingNote] = useState({ id: null, content: '' });

  
  const handleNoteSave = (content, id) => {
    const newNote = {
      id,
      content,
    };
    setNotes([...notes, newNote]);
  };

  const handleNoteEdit = (id, newContent) => {
    setEditingNote({
      id,
      content: newContent,
    });
  };

  const handleCancelEdit = () => {
    setEditingNote({ id: null, content: '' });
  };

  const handleNoteDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const newPdf = {
        id: Date.now(),
        url: reader.result,
      };
      setPdfs([...pdfs, newPdf]);
    };
    reader.readAsDataURL(file);
  };

  const handlePdfDelete = (id) => {
    setPdfs(pdfs.filter((pdf) => pdf.id !== id));
  };


  return (
    <div className="App">
    <Navbar />
    <div className="pet-background">
      <div className="medical-details">
        <h2>Medical Details</h2>
        <div className="note-container">
          {notes.map((note) => (
            <div key={note.id} className="note">
              {editingNote.id === note.id ? (
                <>
                  <textarea
                    value={editingNote.content}
                    onChange={(e) => setEditingNote({ ...editingNote, content: e.target.value })}
                  />
                  <button onClick={handleCancelEdit}>Cancel</button>
                  <button onClick={() => {
                    setNotes(notes.map((n) => (n.id === editingNote.id ? { ...n, content: editingNote.content } : n)));
                    setEditingNote({ id: null, content: '' });
                  }}>Save</button>
                </>
              ) : (
                <>
                  <div className="note-content">{note.content}</div>
                  <div className="note-actions">
                    <button onClick={() => handleNoteEdit(note.id, note.content)}>Edit</button>
                    <button onClick={() => handleNoteDelete(note.id)}>Delete</button>
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="note">
            <textarea onBlur={(e) => handleNoteSave(e.target.value, Date.now())} />
          </div>
        </div>
      </div>
      <div className="pdf-upload">
        <h2>Upload PDF</h2>
        <input type="file" onChange={handlePdfUpload} />
        {pdfs.map((pdf) => (
          <div key={pdf.id}>
            <embed src={pdf.url} type="application/pdf" width="100%" height="600px" />
            <button onClick={() => handlePdfDelete(pdf.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);
};


export default Medical;
