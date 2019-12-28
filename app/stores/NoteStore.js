import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

export default class NoteStore {
  constructor() {

    this.bindActions(NoteActions);

    this.notes = [
        {
            id: uuid.v4(),
            task: 'Key Partners'
          },
          {
            id: uuid.v4(),
            task: 'Key Activities'
          },
          {
            id: uuid.v4(),
            task: 'Key Resources'
          },
          {
            id: uuid.v4(),
            task: 'Value Propositions'
          },
          {
            id: uuid.v4(),
            task: 'Customer Relationships'
          },
          {
            id: uuid.v4(),
            task: 'Channels'
          },
          {
            id: uuid.v4(),
            task: 'Customer Segments'
          },
          {
            id: uuid.v4(),
            task: 'Cost Structure'
          },
          {
            id: uuid.v4(),
            task: 'Revenue Streams'
          }
    ];
  }
  create(note) {
    this.setState({
      notes: this.notes.concat(note)
    })
  }
  update(updatedNote) {
    this.setState({
      notes: this.notes.map(note => {
        if(note.id === updatedNote.id) {
          return Object.assign({}, note, updatedNote);
        }
        return note;
      })
    });
  }
  delete(id) {
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  }
}


 
