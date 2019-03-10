export function calcAvgScore(array) {
    return array.length > 0 ? array.reduce((sum, x) => { return sum + x }, 0) / array.length : 0;
};

export function calcStDev(array) {
    const avg = calcAvgScore(array);
    const squareDiffs = array.map(x => (x - avg) ** 2);
    return Math.sqrt(calcAvgScore(squareDiffs));
};

export function calcStenScore(testScore, avg, stDev) {
    if (!testScore) return null;
    const stenScore = ((testScore - avg) / stDev) * 2 + 5.5;
    if (stenScore < 1) return 1;
    if (stenScore > 10) return 10;
    return stenScore;
}
