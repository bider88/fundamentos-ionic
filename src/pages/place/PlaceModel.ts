export class PlaceModel {
  constructor(
    public name: string,
    public address: string,
    public category: string,
    public description: string,
    public createdAt: Date,
    public id?: string
  ) {}
}
