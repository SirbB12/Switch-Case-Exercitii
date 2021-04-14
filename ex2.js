let numar1 = Number(prompt("Primul numar:"))
let numar2 = Number(prompt("Al doilea numar"))
let numar3 = Number(prompt("Al treilea numar"))
let alegeri = Number(prompt("Alege un numar de la 1 la 4 si vezi ce se intampla!"))



switch (alegeri) {
    case 1:
        {
            console.log("Optiunea 1 aduna numerele introduse.")
            rezultat = numar1 + numar2 + numar3;
            console.log("Iata rezultatul:", rezultat);
            break;
        }
    case 2:
        {
            console.log("Optiunea 2 afiseaza numarul mai mare dintre cele introduse.")
            if (numar1 > numar2 && numar3) {
                console.log("Primul numar este mai mare, iata rezultatul:", numar1);
            } else if (numar2 > numar1 && numar3) {
                console.log("Al doilea numar este mai mare, iata rezultatul:", numar2);

            } else if (numar3 > numar1 && numar2) {
                console.log("Al treilea numar e mai mare, iata rezultatul:", numar3);
            }
            break;
        }
    case 3:
        {
            console.log("Optiunea 3 afieaza rezultatul dintre primul si al treilea numar introdus.")
            rezultat = numar1 + numar3;
            console.log("Iata rezultatul:", rezultat);
            break;

        }
    case 4:
        {
            console.log("Optiunea 4 introduce numerele alese intr-un array si afiseaza array-ul.")
            let myArrayNumber = [];
            myArrayNumber.push(numar1, numar2, numar3);
            console.log("Iata rezultatul:", myArrayNumber);
        }

    default:
        {
            console.log("Aceasta optiune nu exista!")
        }
}