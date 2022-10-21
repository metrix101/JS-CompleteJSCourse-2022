// let dolphineScore = (96 + 108 + 89) / 3;
// let koalasScore = (88 + 91 + 110) / 3;

// // if (dolphineScore > koalasScore) {
// //     console.log(`DolphiN Wins`)
// // } else {
// //     console.log(`Koalas Won`)
// // }

// let teamAvg = (dolphin, koalas) => {
//     dolphin = dolphineScore;
//     koalas = koalasScore;

//     if (dolphin > koalas) {
//         console.log(`Dolphins Are the winners with the Score of ${dolphineScore}`)
//     }
//     if (dolphin < koalas) {
//         console.log(`Koalas Won with ${koalasScore} Points.`)
//     }
//     else if (dolphin == koalas) {
//         console.log(`This Scores are tied. Hence, there's no wiiner. Dolphins Point is ${dolphineScore}
//         and Koalas Score Point is ${koalasScore}`)
//     }
// }
// teamAvg();

const requirement = 100;
let dolphinAvg = (97 + 112 + 101) / 3;
let koalasAvg = (109 + 95 + 123) / 3;

let winner = (dolphinAvg, koalasAvg) => {
    if (dolphinAvg > koalasAvg && dolphinAvg > requirement) {
        console.log(`Dolphin is the Winner with ${dolphinAvg} Points`)
    }
    if (koalasAvg > dolphinAvg && koalasAvg > requirement) {
        console.log(`Koalas Won this round with ${koalasAvg} Points`)
    }
    else if (koalasAvg == dolphinAvg && koalasAvg || dolphinAvg > requirement) {
        console.log(`This is a tie, Thank you all`)
    }
}

winner();