const Intern = require('../lib/Intern');

test('Initializes intern object', () => {
    const intern = new Intern('Andy', 22, 'andyan7@gmail.com', 'Univ. of WA');

    expect(intern.school).toEqual(expect.any(String));
});

test('Retrieves Intern education', () => {
    const intern = new Intern('Andy', 22, 'andyan7@gmail.com', 'Univ. of WA');

    expect(intern.getEd()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Retrieves role of Intern', () => {
    const intern = new Intern('Andy', 22, 'andyan7@gmail.com', 'Univ. of WA');

    expect(intern.getRole()).toEqual('Intern');
});