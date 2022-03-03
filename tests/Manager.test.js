const Manager = require('../lib/Manager');

test('intitializes manager object', () => {
        const manager = new Manager ('Andy', 22, 'andyan7@gmail.com', '2534250012');
    
        expect(manager.officeNumber).toEqual(expect.any(String));
});

test('retrieves manager office number value', () => {
    const manager = new Manager('Andy', 22, 'andyan7@gmail.com', '2534250012')

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()))
});

test('retrieves manager role', () => {
    const manager = new Manager('Andy', 22, 'andyan7@gmail.com', '2534250012');

    expect(manager.getRole()).toEqual('Manager');
});