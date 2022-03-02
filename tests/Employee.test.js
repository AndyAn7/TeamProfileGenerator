const Employee = require('../lib/Employee');

test ('initializes employee object', () => {
    const employee = new Employee ('Andy', 22, 'andyan7@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test ('retrieves employee name', () => {
    const employee = new Employee ('Andy', 22, 'andyan7@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test ('retrieves employee Id', () => {
    const employee = new Employee ('Andy', 22, 'andyan7@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test ('retrieves employee email', () => {
    const employee = new Employee ('Andy', 22, 'andyan7@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test ('retrieves employee role', () => {
    const employee = new Employee ('Andy', 22, 'andyan7@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});