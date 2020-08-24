

export function randomPick(): EuroJackpotPick {

    let lotteryNumbersPool: Array<number> = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
    ];

    let euroNumbersPool: Array<number> = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
    ];

    let result: EuroJackpotPick = {
        numbers: [],
        euroNumbers: [],
    };

    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * lotteryNumbersPool.length);
        let currentNo = lotteryNumbersPool[randomIndex];
        result.numbers.push(currentNo);
        lotteryNumbersPool = lotteryNumbersPool.filter(item => item !== currentNo);
    }

    result.numbers.sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i < 2; i++) {
        let randomIndex = Math.floor(Math.random() * euroNumbersPool.length);
        let currentNo = euroNumbersPool[randomIndex];
        result.euroNumbers.push(currentNo);
        euroNumbersPool = euroNumbersPool.filter(item => item !== currentNo);
    }

    result.numbers.sort(function(a, b) {
        return a - b;
    });

    return result;
}
