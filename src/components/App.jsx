import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function createNotes(noteItem) {
    return <Note 
        key={noteItem.Key}
        title={noteItem.title}
        content={noteItem.content}
    />
}

function App() {
    return <div>
        <Header />
        <CreateArea />
        {notes.map(createNotes)}
        <Footer />
    </div>
}

export default App;