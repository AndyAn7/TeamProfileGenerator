const Intern = require('../lib/Intern');

test('Initializes intern object', () => {
    const intern = new Intern('Andy', 22, 'andyan7@gmail.com', 'Univ. of WA');

    expect(intern.school).toEqual(expect.any(String));
});