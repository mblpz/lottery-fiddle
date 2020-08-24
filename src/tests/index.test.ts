import {randomPick} from "../index";


test('return 5 random numbers (out of 1 to 50, none twice or more), and 2 euro numbers (1 to 10)', () => {
    const euroJackpotRandomPick: EuroJackpotPick = randomPick();

    expect(euroJackpotRandomPick.numbers.length).toEqual(5);
    expect(euroJackpotRandomPick.numbers.sort()[0]).toBeGreaterThan(0);
    expect(euroJackpotRandomPick.numbers.sort()[4]).toBeLessThan(51);
    expect([... new Set(euroJackpotRandomPick.numbers)].length).toEqual(5);

    expect(euroJackpotRandomPick.euroNumbers.length).toEqual(2);
    expect([... new Set(euroJackpotRandomPick.euroNumbers)].length).toEqual(2);

    let lotteryStats: any = {
      digitalHeatMap: [],
    };

    for (let i = 0; i < 200; i++) {
        let round: EuroJackpotPick = randomPick();
        lotteryStats.digitalHeatMap = [... new Set(round.numbers.concat(lotteryStats.digitalHeatMap))];
    }

    expect(lotteryStats.digitalHeatMap.length).toBeGreaterThan(40);

    let euroNumbersStats: any = {
        digitalHeatMap: [],
    };

    for (let i = 0; i < 40; i++) {
        let round: EuroJackpotPick = randomPick();
        euroNumbersStats.digitalHeatMap = [... new Set(round.euroNumbers.concat(euroNumbersStats.digitalHeatMap))];
    }

    expect(euroNumbersStats.digitalHeatMap.length).toBeGreaterThan(8);

});