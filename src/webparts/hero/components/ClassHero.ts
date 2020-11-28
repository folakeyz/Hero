import { IHero } from "./IHero";
export class ClassHero{
    public Image:string;
    public Title:string;
   


    constructor(item: IHero){
        this.Image = item.Image;
        this.Title = item.Title;
       
    }
}
