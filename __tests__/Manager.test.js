const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('A', 'email.com');

    expect(manager.name).toBe('A');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));


});

test("gets manager's name", () => {
    const manager = new Manager('A', 'email.com');

    expect(manager.getName()).toBe(manager.name);
});

test("gets manager's id", () => {
    const manager = new Manager('A', 'email.com');

    expect(manager.getId()).toBe(manager.id);
});

test("gets manager's email", () => {
    const manager = new Manager('A', 'email.com');

    expect(manager.getEmail()).toBe(manager.email);
});

test("gets manager's role", () => {
    const manager = new Manager('A', 'email.com');

    expect(manager.getRole()).toBe('Manager');
});

