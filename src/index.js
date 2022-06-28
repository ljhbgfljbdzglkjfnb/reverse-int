module.exports = function reverse (n) {
    number = Math.abs(n);
    text = number.toString();
    array = text.split('').reverse();
    res = Number(array.join(''));
    return res;
}
