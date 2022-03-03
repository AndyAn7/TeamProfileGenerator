const Engineer = require('../lib/Engineer');

test('initializes engineer object', () => {
    const engineer = new Engineer('Andy', 22, 'andyan7@gmail.com', 'andyan7');

    expect(engineer.github).toEqual(expect.any(String));
});

test('retrieves engineer')