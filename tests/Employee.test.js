const Employee = require('../lib/Employee');

test ('initializes employee object', () => {
    const employee = new Employee ('Andy', 22, 'andyan7@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});