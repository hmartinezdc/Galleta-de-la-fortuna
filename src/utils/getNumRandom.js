export const getNumRandom = (number) => {
    const random = Math.random();
    const roundedNum = Math.round(random * number);
    return roundedNum;
};