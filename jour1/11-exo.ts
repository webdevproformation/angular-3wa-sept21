class Exercice{
    private titre : string;
    private enonce : string;
    private point : number;

    constructor(titre :string, enonce : string , point :number){
        this.titre = titre;
        this.enonce = enonce;
        this.point = point;
    }
    private aujourdhui() : string{
        const dt = new Date();
        return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`
    }
    print() : string{
        return `<div>
        <h1>${this.titre}</h1>
            <p>${this.enonce}</p>
            <ul>   
                <li>nb point : ${this.point}</li>
                <li>date : ${this.aujourdhui()}</li>
            </ul>
        </div>`
    }
}

const e1 = new Exercice("exo 1", "generateur de lorem ipsum" , 10);
const e2 = new Exercice("exo 2", "générer une fonction sur les palydrome" , 20);

console.log(e1.print(), e2.print());
// tsc 11-exo.ts && node 11-exo.js