
module.exports = function zeros(expression) {

    let arrSplit = expression.toString().split(/\*/);
    let arrParsing = [];
    for (item in arrSplit) {
        let n = parseInt(arrSplit[item]);
        if (n == 1) {
            arrParsing.push(n);
        } else {
            if (arrSplit[item].includes("!!")) {
                for (n; n > 0; n -= 2) {
                    arrParsing.push(n);
                }
            } else {
                if (n == 1) {
                    arrParsing.push(n);
                } else {
                    for (n; n > 0; n--) {
                        arrParsing.push(n);
                    }
                }
            }
        }
    }

    let x = 0;
    let y = 0;
    for (item in arrParsing) {
        let intermediateInt = [];
        if (arrParsing[item] > 0 && arrParsing[item] != 1) {
            for (let i = 2; i <= arrParsing[item]; i++) {
                while (arrParsing[item] % i == 0 && arrParsing[item] > 1) {
                    intermediateInt.push(i);
                    arrParsing[item] = arrParsing[item] / i;
                }
                if (arrParsing[item] / i == 1) {
                    intermediateInt.push(arrParsing[item]);
                }
            }
        } else if (arrParsing[item] == 1) {
            intermediateInt.push(arrParsing[item]);
        }

        for (elem in intermediateInt) {
            if (intermediateInt[elem] == 2) {
                x++;
            } else if (intermediateInt[elem] == 5) {
                y++;
            }
        }
    }
    if (x <= y) {
        return x
    } else {
        return y;
    }

}