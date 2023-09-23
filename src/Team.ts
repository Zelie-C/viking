import { Character } from "./Character/Character";

export class Team {
  private _teamName: string;
  private _composition: Character[];

  constructor(teamName: string, composition: Character[]){
    this._teamName = teamName;
    this._composition = composition;
  }


  public get teamName(): string {
    return this._teamName;
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public get composition(): Character[] {
    return this._composition;
  }
  public set composition(value: Character[]) {
    this._composition = value;
  }
}
