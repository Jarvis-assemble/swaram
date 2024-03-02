var btn=document.querySelectorAll(".note")

for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener("click",handleClick);
}


function handleClick()
{

    var letter=this.textContent;

    switch(letter)
    {
        case "sa": 
        var sa=new Audio("sounds/sa.mp3"); 
        sa.play(); 
        break;

        case "ri": 
        var ri=new Audio("sounds/ri.mp3"); 
        ri.play(); 
        break;

        case "ga": 
        var ga=new Audio("sounds/ga.mp3"); 
        ga.play(); 
        break;

        case "ma": 
        var ma=new Audio("sounds/ma.mp3"); 
        ma.play(); 
        break;

        case "pa": 
        var pa=new Audio("sounds/pa.mp3"); 
        pa.play(); 
        break;

        case "dha": 
        var dha=new Audio("sounds/dha.mp3"); 
        dha.play(); 
        break;

        case "ni": 
        var ni=new Audio("sounds/ni.mp3"); 
        ni.play(); 
        break;

        case "Sa": 
        var Sa=new Audio("sounds/usa.mp3"); 
        Sa.play(); 
        break;

        default:
            console.log(letter);
    }
    
}

/*var drum=new Audio("sounds/tom-2.mp3"); //audio object //HTMLAudioElement
    drum.play(); //play method */

document.addEventListener("keydown",keyPress);
 
function keyPress(e){
    handlePress(e.key);
}

function handlePress(key)
{
    switch(key)
    {
        case "a": 
        var sa=new Audio("sounds/sa.mp3"); 
        sa.play(); 
        break;

        case "s": 
        var ri=new Audio("sounds/ri.mp3"); 
        ri.play(); 
        break;

        case "d": 
        var ga=new Audio("sounds/ga.mp3"); 
        ga.play(); 
        break;

        case "f": 
        var ma=new Audio("sounds/ma.mp3"); 
        ma.play(); 
        break;

        case "g": 
        var pa=new Audio("sounds/pa.mp3"); 
        pa.play(); 
        break;

        case "h": 
        var dha=new Audio("sounds/dha.mp3"); 
        dha.play(); 
        break;

        case "j": 
        var ni=new Audio("sounds/ni.mp3"); 
        ni.play(); 
        break;

        case "k": 
        var Sa=new Audio("sounds/usa.mp3"); 
        Sa.play(); 
        break;

        default:
            console.log("oh no");
    }

}