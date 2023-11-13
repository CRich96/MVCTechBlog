const {format_date} = require('../utils/helpers');



test('format_date() returns a date string', () => {
    const date = new Date('2023-11-04 16:12:03');

    expect(format_date(date)).toBe('11/04/2023');
});