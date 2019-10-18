export class Hero{
    id: string;
    abilities: string[];
    avatar: string;
    class: string;
    difficulity: number;
    dps: number;
    name: string;


    constructor(abilities: string[], avatar: string, classField: string, difficulity: number
        , dps: number, name: string, id?: string){
            this.abilities = abilities;
            this.avatar = avatar;
            this.class = classField;
            this.difficulity = difficulity;
            this.dps = dps;
            this.name = name;
            this.id = id;
    }
}