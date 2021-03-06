import React from 'react';
import EachNote from './Notes/EachNote'
import './Note.css';

function Note(props){

    return(
        <>
            <h2 className='note-header'>Notes</h2>
            <div className='note-cont'>
                {props.notes.map(item => 
                    <EachNote 
                        key={item.id} 
                        name={item.name} 
                        modified={item.modified}
                        content={item.content}
                        folderId={item.folderId}
                        noteId={item.id}
                    />
                )}
                <button className='add-note-btn'>Add Note</button>
            </div>
        </>
        
    )
}

export default Note;