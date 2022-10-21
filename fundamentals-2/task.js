const caclAverage = (score1, score2, score3) => {
    return ((score1 + score2 + score3) / 3)
}
const scoreDolphins = caclAverage(44, 23, 71);
const scoreKoalas = caclAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > (2 * avgKoalas)) {
        console.log(`Dolphins wins the Trophy with ${avgDolphins} Points`)
    } else if (avgKoalas > (avgDolphins * 2)) {
        console.log(`Koalas Won with ${avgKoalas} Points`)
    } else {
        console.log(`No Winner!`)
    }
    return (avgDolphins, avgKoalas)
}

//checkWinner(scoreDolphins, scoreKoalas);
checkWinner(1000, 200);