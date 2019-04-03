import INote from "./../interfaces/INote";
import IAttachment from "../interfaces/IAttachment";

class NotesCollection {
  private _notes: INote[] = [];

  private constructor(notes: INote[]) {
    this._notes = notes;
  }

  public [Symbol.iterator](): IterableIterator<INote> {
    return this._notes.values();
  }

  public static factory(notes: INote[]): NotesCollection {
    return new NotesCollection(notes);
  }

  private getNoteSize(note: INote): "s" | "m" | "l" {
    switch (note.type) {
      case "list":
        const { items }: INote = note;
        if (items) {
          const length: number = items.length;
          if (length > 16) {
            return "l";
          }
          return "m";
        }
        return "s";

      case "text":
        const { text }: INote = note;
        const attach: IAttachment[] | undefined = note.attachments;
        const reminder: number | undefined = note.reminder;
        if (text) {
          const length: number = text.length;
          if (length < 80) {
            if (reminder) {
              return "m";
            }
            if (attach) {
              if ((attach[0].type = "image")) return "m";
            }
            return "s";
          } else if (length >= 80 && length < 140) {
            return "m";
          } else {
            return "l";
          }
        } else {
          if (reminder) {
            return "m";
          }
          return "s";
        }

      case "image":
        if (note.text && note.text.length > 80) return "l";
        return "m";

      default:
        return "s";
    }
  }

  public addNote(note: INote): void {
    note.id = this._notes.length;
    note.created = new Date().getTime();
    if (!note.size) {
      note.size = this.getNoteSize(note);
    }
    this._notes.push(note);
  }

  public deleteNote(id: number): boolean {
    const item = this.find(item => item.id === id);
    if (item) {
      const index = this._notes.indexOf(item);
      this._notes.splice(index, 1);
      return true;
    }
    return false;
  }

  public editNote(id: number, note: INote): boolean {
    const item = this.find(item => item.id === id);
    if (item) {
      const index = this._notes.indexOf(item);
      this._notes[index] = note;
      return true;
    }
    return false;
  }

  public toArray(): INote[] {
    return this._notes;
  }

  public filter(callback: (item: INote) => boolean): INote[] {
    let results = [];
    for (let i = 0; i < this._notes.length; i++) {
      if (callback.call({}, this._notes[i])) {
        results.push(this._notes[i]);
      }
    }
    return results;
  }

  public find(callback: (item: INote) => boolean): INote | undefined {
    let find = false;
    let findItem;
    for (let i = 0 && !find; i < this._notes.length; i++) {
      if (callback.call({}, this._notes[i])) {
        findItem = this._notes[i];
        find = true;
      }
    }
    return findItem;
  }
}

export default NotesCollection;
