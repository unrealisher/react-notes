import IData from "./../intefaces/IData";

export default class Data {
  public async getData(): Promise<IData> {
    const res = await fetch("./../data/data.json");
    if (!res.ok) {
      throw new Error("Could not fetch");
    }
    return await res.json();
  }
}
