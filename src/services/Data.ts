import axios from "axios";

import IData from "../interfaces/IData";
import INote from "../interfaces/INote";
import IColor from "../interfaces/IColor";
import ITag from "../interfaces/ITag";

export default class Data {
  private static async fetch<T>(url: string): Promise<T> {
    const res = await axios.get(url);
    if (res.status !== 200) {
      throw new Error("Could not fetch");
    }
    return await res.data;
  }

  public static getData(): Promise<IData> {
    return this.fetch("/api/data");
  }

  public static getNotes(): Promise<INote[]> {
    return this.fetch("/api/cards");
  }

  public static getArchive(): Promise<INote[]> {
    return this.fetch("/api/archive");
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
