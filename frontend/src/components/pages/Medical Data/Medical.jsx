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
    <div className="App-mdeical">
    <Navbar />
    <div className="pet-background">
      <div className="medical-details">
        <h2 className='medical-h2' >Medical Details</h2>
        <div className="note-container">
          {notes.map((note) => (
            <div key={note.id} className="note">
              {editingNote.id === note.id ? (
                <>
                  <textarea className='input-medical-details'
                    value={editingNote.content}
                    onChange={(e) => setEditingNote({ ...editingNote, content: e.target.value })}
                  />
                  <button className='cancel-btn-edit' onClick={handleCancelEdit}>Cancel</button>
                  <button className='cancel-btn-edit' onClick={() => {
                    setNotes(notes.map((n) => (n.id === editingNote.id ? { ...n, content: editingNote.content } : n)));
                    setEditingNote({ id: null, content: '' });
                  }}>Save</button>
                </>
              ) : (
                <>
                  <div className="note-content">{note.content}</div>
                  <div className="note-actions">
                    <button className='cancel-btn-edit' onClick={() => handleNoteEdit(note.id, note.content)}>Edit</button>
                    <button className='cancel-btn-edit' onClick={() => handleNoteDelete(note.id)}>Delete</button>
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="note">
            <textarea className='input-medical-details' onBlur={(e) => handleNoteSave(e.target.value, Date.now())} />
          </div>
        </div>
      </div>
      <div className="pdf-upload">
        <h2 className='medical-h2' >Upload PDF</h2>
        <div className='pdf-content'>
          <input className='input-medical-details' type="file" onChange={handlePdfUpload} />
          { pdfs.map((pdf) => (
            <div key={pdf.id}>
              <embed src={pdf.url} type="application/pdf" width="100%" height="400px" />
              <button className='cancel-btn-edit' onClick={() => handlePdfDelete(pdf.id)}>Delete</button>
            </div>
          ))}
        </div>  
      </div>
    </div>
    <Footer />
  </div>
);
};


export default Medical;
