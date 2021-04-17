const sea=document.querySelector('.sea');
const sea1=document.querySelector('.sea-1');
const sea2=document.querySelector('.sea-2');
const sea3=document.querySelector('.sea-3');
const sea4=document.querySelector('.sea-4');
let alliasNumbers=[];
let enemyNumbers=[];

sea.addEventListener('click',selectArea);

let alliasAttackNumber=0;
let enemyAttackNumber=0;

function selectArea(e){
    if(alliasAttackNumber<alliasNumbers.length){
        alliasAttackNumber++;
        atisSayisiAllias(true);
        atisSayisiEnemy(false);
        yourTurn(true);
        let last=parseInt(e.target.id[e.target.id.length-1]);
        
        for(let i=0;i<enemyNumbers.length;i++){
            if(last===enemyNumbers[i]){
                console.clear();
                console.log(`${last} bölgesinde ki düşman unsurunu batırdın`);
                let enemyArea=`enemyArea${last}`;  
                const selectedArea=document.getElementById(`${enemyArea}`);
                selectedArea.style.backgroundImage="url(img/enemyShipx.jpg)";
                enemyNumbers=enemyNumbers.filter((value)=>{
                return value!=last;
                })
                break;
            }
            else{
                console.clear();
                console.log("Ateş açılan bölgede düşman unsuru yok");
                let enemyArea=`enemyArea${last}`;  
                const selectedArea=document.getElementById(`${enemyArea}`);
                selectedArea.style.backgroundColor="white";
            }
            
        }
       if(alliasAttackNumber===alliasNumbers.length){
           yourTurn(false);
       }
        
    }
    else{
        for(let a=0;a<enemyNumbers.length;a++){
            if(enemyAttackNumber<enemyNumbers.length){
                atisSayisiAllias(false);
                atisSayisiEnemy(true);
                yourTurn(true);
                enemyAttackNumber++;
                let attack=rastGele(enemyNumbers.length);
                
                for(let i=0;i<alliasNumbers.length;i++){
                    for(let a=0;a<attack.length;a++){
                        console.clear();
                        if(attack[a]===alliasNumbers[i]){
                            console.log(`${attack[a]} bölgesinde ki gemimiz vuruldu`);
                            let alliasArea=`alliasArea${attack[a]}`;
                            const selectedArea=document.getElementById(`${alliasArea}`);
                            selectedArea.style.backgroundImage="url(img/shipx.jpg)";
                            alliasNumbers=alliasNumbers.filter((value)=>{
                                return value!=attack[a];
                            })
                            break;
                        }
                        else{
                            console.clear();
                            console.log("Düşman ateş etti ancak vuramadı");
                            
                        }
                    }
                    
                }
            }
        }
        
        
    }
    if(enemyAttackNumber>=enemyNumbers.length && alliasAttackNumber>=alliasNumbers.length){
        enemyAttackNumber=0;
        alliasAttackNumber=0;
    }
    

}
function atisSayisiAllias(p){
    const span=document.getElementById('a');
    let sayi=parseInt(span.textContent);
    if(p){
        sayi--;
        span.textContent=sayi;
    }
    else{
        span.textContent=alliasNumbers.length;
    }
    
}
function atisSayisiEnemy(p){
    const span=document.getElementById('d');
    let sayi=parseInt(span.textContent);
    if(p){
        sayi--;
        span.textContent=sayi;
    }
    else{
        span.textContent=enemyNumbers.length;
    }
    
}
function yourTurn(p){
    const turn=document.querySelector('.turn');
    if(p){
        turn.textContent="Senin Sıran";
    }
    else{
        turn.textContent="Düşman sırası bir kere tıkla düşman saldırısını yapacak";
    }
    
}
function main(){
    createSea();
    alliasShip();
    enemyShip();
}

main();

function rastGele(p){
    let ran=[];
    for(let i=0;i<p;i++){
        ran.push(Math.floor(Math.random()*10));
        if(i>0 && ran[i]===ran[i-1]){
            ran.pop();
            i--;
        }
        if(i>1 && ran[i]===ran[i-2]){
            ran.pop();
            i--;
        }
    }
    return ran;
}
function vuruldun(){
    
}
function createSea(){
    for(let i=0;i<10;i++){
        if(i<5){
            let area=document.createElement('div');
            area.className="area";
            area.id=`enemyArea${i}`;
            sea1.appendChild(area);
        }
        else{
            let area=document.createElement('div');
            area.className="area";
            area.id=`enemyArea${i}`;
            sea2.appendChild(area);
        }
        
    }
    
    for(let i=0;i<10;i++){
        if(i<5){
            let area=document.createElement('div');
            area.className="area";
            area.id=`alliasArea${i}`;
            sea3.appendChild(area);
        }
        else{
            let area=document.createElement('div');
            area.className="area";
            area.id=`alliasArea${i}`;
            sea4.appendChild(area);
        }
        
    }
}


function alliasShip(){
    
    for(let i=0;i<3;i++){
        alliasNumbers.push(Math.floor(Math.random()*10));
        if(i>0 && alliasNumbers[i]===alliasNumbers[i-1]){
            alliasNumbers.pop();
            i--;
        }
        if(i>1 && alliasNumbers[i]===alliasNumbers[i-2]){
            alliasNumbers.pop();
            i--;
        }
    }
    console.log(alliasNumbers);
    for(let i=0;i<alliasNumbers.length;i++){
        let alliasArea=`alliasArea${alliasNumbers[i]}`;  
        const selectedArea=document.getElementById(`${alliasArea}`);
        selectedArea.style.backgroundImage="url(img/ship.jpg)";
    }
    
}

function enemyShip(){
    
    
    for(let i=0;i<3;i++){
        enemyNumbers.push(Math.floor(Math.random()*10));
        if(i>0 && enemyNumbers[i]===enemyNumbers[i-1]){
            enemyNumbers.pop();
            i--;
        }
        if(i>1 && enemyNumbers[i]===enemyNumbers[i-2]){
            enemyNumbers.pop();
            i--;
        }
    }
    console.log(enemyNumbers);
}

