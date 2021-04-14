let nr1 = Number(prompt("Adaugati un numar"));
let operator = String(prompt("Adaugati operator"));
let nr2 = Number(prompt("Adaugati numar"))


switch (operator) {
    case "+":
        {
            rezultat = nr1 + nr2;
            break;
        }
    case "-":
        {
            rezultat = nr1 - nr2;
            break;
        }
    case "*":
        {
            rezultat = nr1 * nr2;
            break;
        }
    case "%":
        {
            rezultat = nr1 % nr2;
            break;
        }
    default:
        {
            console.log("Nici un rezultat!");
        }
}
console.log(rezultat);