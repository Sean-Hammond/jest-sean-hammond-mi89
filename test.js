const { sum, fromEuroToDollar, fromDollarToYen } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.07

    expect(fromEuroToDollar(3.5)).toBe(3.745)
})

test("One dollar should be ( 1.07 / 156.5 ) yen", () => {
    const dollars = fromDollarToYen(1)

    const expected = ( 1.07 / 156.5 )

    expect(fromDollarToYen(1)).toBe(( 1.07 / 156.5 ))
})