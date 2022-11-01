//     Creare un'app con la lista di brani musicali. 
//     Milestone 1.
//     Creare l'array di brani musicali. Ogni brano ha nome, cantante, genere, duratata.
//  FATTO

//     Milestone 2.
//     Visualizzare i brani musicali in pagina
//  FATTO

//     Milestone 3.
//     Al click su un brano deve comparire un'icona play. Per far scomparire l'icona l'utente deve cliccare al brano
//     un'altra volta.
//     ATTENZIONE: solo visualizzare / fare nascondere l'icona, non dovete riprodurre i brani ;) 
//  FATTO

//     Milestone 4.
//     Predisporre gli input che permettono all'utente di aggiungere un nuovo brano alla lista.
//  FATTO


const {createApp} = Vue;

createApp({

    data(){
        return{

            flagCaratteriMinimi: false,

            nuovoBrano: {
                nome: "",
                cantante: "",
                genere: "",
                durata: "",
                player: false,
            },

            braniMusicali: [
                {
                    nome: "pinco",
                    cantante: "pallo",
                    genere: "rocc",
                    durata: "10 minuti",
                    player: false,
                },
                {
                    nome: "giuda",
                    cantante: "gesu",
                    genere: "rocc",
                    durata: "1 secondo",
                    player: false,
                },
                {
                    nome: "caino",
                    cantante: "abele",
                    genere: "rocc",
                    durata: "5 minuti",
                    player: false, 
                },
            ],
        }
    },

    methods: {
        playStop(index){
            this.braniMusicali[index].player = !this.braniMusicali[index].player;
        },

        aggiungiBrano(){
            if(this.nuovoBrano.nome.length > 4 && this.nuovoBrano.cantante.length > 4 && this.nuovoBrano.genere.length > 4 && this.nuovoBrano.durata.length > 4){

                const copiaNuovoBrano = {...this.nuovoBrano};
    
                this.braniMusicali.push(copiaNuovoBrano);            
    
                this.nuovoBrano = {
                    nome: "",
                    cantante: "",
                    genere: "",
                    durata: "",
                    player: false,
                };

                this.flagCaratteriMinimi = false;
            } else{
                this.flagCaratteriMinimi = !this.flagCaratteriMinimi;
            }
        },

    },

}).mount("#app");