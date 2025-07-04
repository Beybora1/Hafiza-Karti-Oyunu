// Hafıza Kartı Oyunu


const icons = ['🍎', '🍌', '🍒', '🍇', '🍉', '🥭', '🍍', '🍓'];

let cards = [...icons, ...icons];
let gameBoard = document.getElementById("gameBoard");
let tablo = [];

function shuffle(){
    return cards.sort(() => Math.random() - 0.5);
}


function Game(){

    cards = shuffle();
    //console.log(cards);
    
    cards.forEach((icon, index) => {

        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.icon = icon;
        gameBoard.appendChild(card);
        card.onclick = () => Getir()
        //console.log(card);

        function Getir(){

            if(!card.classList.contains("flipped")){

                card.textContent = icon;
                card.classList.add("flipped");
                tablo.push(card);
                //console.log(tablo);
                
                if(tablo.length === 2){
    
                    if(tablo[0].textContent === tablo[1].textContent){
    
                        tablo = [];
    
                    }
    
                    else{
    
                        setTimeout(() => {
    
                            tablo[0].textContent = "";
                            tablo[1].textContent = "";
                            tablo[0].classList.remove("flipped");
                            tablo[1].classList.remove("flipped");
                            tablo = [];
    
                        }, 500);
    
                    }
                }
            }
        }
    });

}

Game();
shuffle();


