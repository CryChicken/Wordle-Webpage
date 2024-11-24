let correct_word = Math.floor(((Math.random())*20)+1);
console.log(correct_word);
switch (correct_word){
    case 1 :
        correct_word = "Apples"
        break;
    case 2 :
        correct_word = "Bottle"
        break;
    case 3 :
        correct_word = "Garden"
        break;
    case 4 :
        correct_word = "Market"
        break;
    case 5 :
        correct_word = "Tables"
        break;
    case 6 :
        correct_word = "Sunset"
        break;
    case 7 :
        correct_word = "Friend"
        break;
    case 8 :
        correct_word = "Travel"
        break;
    case 9 :
        correct_word = "Simple"
        break;
    case 10 :
        correct_word = "Laughs"
        break;
    case 11 :
        correct_word = "Laptop"
        break;
    case 12 :
        correct_word = "Singer"
        break;
    case 13 :
        correct_word = "Dancer"
        break;
    case 14 :
        correct_word = "Orange"
        break;
    case 15 :
        correct_word = "Monkey"
        break;
    case 16 :
        correct_word = "Papers"
        break;
    case 17 :
        correct_word = "Winter"
        break;
    case 18 :
        correct_word = "Window"
        break;
    case 19 :
        correct_word = "Summer"
        break;
    case 20 :
        correct_word = "Darker"
        break;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}

let lowered_correct_word = correct_word.toLowerCase()
console.log(correct_word);

word = ["?","?","?","?","?","?"];

const guessword_box = document.getElementById("guess_word");

function replace_guessbox() {
guessword_box.textContent = [...word].join("    ");
}
replace_guessbox();

let inputword;
let analyze_inputword;
let lowered_inputword;
let analyze_word = [...lowered_correct_word];
console.log(analyze_word)
let lives = 6;









 function wordle(){
    inputword = document.getElementById("input").value;
    console.log(isNaN(inputword));
    console.log(inputword.length)

    if (isNaN(inputword) && ((inputword.length) == 6)){

    
    if (lives > 0){
 
        lowered_inputword = inputword.toLowerCase();
        document.getElementById("input").value = "";
        analyze_inputword = [...inputword];
        console.log(analyze_inputword);
        
        if(lowered_inputword == lowered_correct_word) {
            for(a=0;a<6;a++){
                word[a] = analyze_word[a];
                word[0] = word[0].toUpperCase(); 
            }
            replace_guessbox();
            document.getElementById("win").textContent = "You Win!!";
            setTimeout(() => {
                location.reload();
            }, 3000);
        } else {
            switch (lives){
                case 6:
                    document.getElementById("guess 1").textContent = inputword;
                    break;
                    case 5:
                        document.getElementById("guess 2").textContent = inputword;
                        break;
                        case 4:
                            document.getElementById("guess 3").textContent = inputword;
                            break;
                            case 3:
                                document.getElementById("guess 4").textContent = inputword;
                                break;           
                                case 2:
                                    document.getElementById("guess 5").textContent = inputword;
                                    break;            
                                    case 1:
                                        document.getElementById("guess 6").textContent = inputword;
                                        break; 
            }
            lives --;
            for(i=0;i<6;i++){
                for(j=0;j<6;j++){
                    if(analyze_inputword[j] == analyze_word[i]){
                            word[i] = analyze_word[i];
                            word[0] = word[0].toUpperCase(); 
                            replace_guessbox(); 
                    }
                }
            }
        }
        
    } else{
        document.getElementById("error").textContent = "You used up all attempts";
        document.getElementById("input").value = ""
        setTimeout(() => {
            document.getElementById("error").textContent = `The correct word was "${correct_word}"`;

        }, 1000);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }

}


 else {
    document.getElementById("error").textContent = "Please enter a 6 letter long word"
}}

document.getElementById("input").addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        wordle();
    }})