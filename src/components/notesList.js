import AddNote from './addNote'
import Note from './note'

const NotesList = ({
    notes,
    handleAddNote,
    handleDeleteNote,
}) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                    key={note.id}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;