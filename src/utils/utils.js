export function calcAvgScore(array) {
    return array.length > 0 ? array.reduce((sum, x) => { return sum + x }, 0) / array.length : 0;
};

export function calcStDev(array) {
    const mean = calcAvgScore(array);
    const squareDiffs = array.map(x => (x - mean)**2);
    return Math.sqrt(calcAvgScore(squareDiffs));
};
