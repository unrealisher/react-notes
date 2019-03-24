import data from "./../data/data";

import IData from "./../intefaces/IData";
import INote from "./../intefaces/INote";
import IAttachment from "../intefaces/IAttachment";

class NotesCollection {
  private _notes: INote[] = [];

  // public static async factory(url: string): Promise<INote[]> {
  //   const res = await fetch(url);
  //   if (!res.ok) {
  //     throw new Error("Could not fetch");
  //   }
  //   const data: IData = await res.json();
  //   return data.notes;
  // }

  public static factory(): IData {
    return data;
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
    if (!note.size) {
      note.size = this.getNoteSize(note);
    }
    this._notes.push(note);
  }

  public toArray(): INote[] {
    return this._notes;
  }
}

export default NotesCollection;
