import IData from "./../intefaces/IData";
import INote from "./../intefaces/INote";
import IColor from "./../intefaces/IColor";
import ITag from "./../intefaces/ITag";

export default class Data {
  private static async fetch<T>(url: string): Promise<T> {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Could not fetch");
    }
    return await res.json();
  }

  public static getData(): Promise<IData> {
    return this.fetch("/api/data");
  }

  public static getNotes(): Promise<INote[]> {
    return this.fetch("/api/cards");
  }

  public static getColors(): Promise<IColor[]> {
    return this.fetch("/api/colors");
  }

  public static async getTags(): Promise<ITag[]> {
    return this.fetch("/api/tags");
  }

  private static async deleteItemById<T>(url: string): Promise<T> {
    const res = await fetch(url, { method: "delete" });
    if (!res.ok) {
      throw new Error("Could not fetch");
    }
    return await res.json();
  }

  public static async deleteNote(id: number): Promise<IData> {
    return this.deleteItemById(`/api/cards/${id}`);
  }

  public static async deleteColor(id: number): Promise<IData> {
    return this.deleteItemById(`/api/colors/${id}`);
  }

  public static async deleteTag(id: number): Promise<IData> {
    return this.deleteItemById(`/api/tags/${id}`);
  }
}
