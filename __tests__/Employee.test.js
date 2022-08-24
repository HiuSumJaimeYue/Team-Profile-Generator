const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('A', 1, 'email.com');

    expect(employee.name).toBe('A');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

test("gets employee's name", () => {
    const employee = new Employee('A', 1, 'email.com');

    expect(employee.getName()).toBe(employee.name);
});

test("gets employee's id", () => {
    const employee = new Employee('A', 1, 'email.com');

    expect(employee.getId()).toBe(employee.id);
});

test("gets employee's email", () => {
    const employee = new Employee('A', 1, 'email.com');

    expect(employee.getEmail()).toBe(employee.email);
});

test("gets employee's role", () => {
    const employee = new Employee('A', 1, 'email.com');

    expect(employee.getRole()).toBe('Employee');
});

