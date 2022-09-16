let playerArray =[];

document.getElementById('Calculate').addEventListener('click', function (){
    const PlayerExpense =document.getElementById('PlayerExpenses');
    const perPlayer = document.getElementById('perPlayer');
    const perPlayerString = perPlayer.value;
    const perPlayerCost = parseInt(perPlayerString);
    const arrayName =playerArray.slice(0, 5).length
    const Calculates = arrayName * perPlayerCost;
    PlayerExpense.innerText = Calculates;
    slice(1, 3)
    
    perPlayer.value = '';
});

document.getElementById('CalculateTotal').addEventListener('click' , function(){
    const PlayerExpense =document.getElementById('PlayerExpenses');
    const  PlayerExpenseString = PlayerExpense.innerText;
    const PlayerExpenseValue =parseInt(PlayerExpenseString);

    const manager = document.getElementById('manager');
    const managerString = manager.value;
    const managerCost = parseInt(managerString);

    const Coach = document.getElementById('Coach');
    const CoachString = Coach.value;
    const CoachCost = parseInt(CoachString);

    const PlayerTotal =document.getElementById('total');

    const CalculateTotal = PlayerExpenseValue + managerCost + CoachCost ;
    PlayerTotal.innerText = CalculateTotal ;

    manager.value = '';
    Coach.value = '';
    

})


function addToCart(element){
    const name = element.parentNode.parentNode.parentNode.children[1].children[0].innerText ;
    playerArray.push(name);
    if (playerArray.length > 5 ) {
        
        alert('You cannot add more than 5')
        return 
    }
    
    display(playerArray);
    element.disabled = true;
}

function display(playerArray) {
    
    const ol =document.getElementById('olList');
    const li =document.createElement("li");
    for(let i = 0; i<playerArray.length ; i++){
        const playerName =playerArray[i] ;
        
        
    li.innerHTML = `
    
    <ol>${playerName}</ol>
    
    `
    }
    ol.appendChild(li);

    
}

