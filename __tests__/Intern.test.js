const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('A', 'email.com', 'schoolName');

    expect(intern.name).toBe('A');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});

test("gets intern's name", () => {
    const intern = new Intern('A', 'email.com', 'schoolName');

    expect(intern.getName()).toBe(intern.name);
});

test("gets intern's id", () => {
    const intern = new Intern('A', 'email.com', 'schoolName');

    expect(intern.getId()).toBe(intern.id);
});

test("gets intern's email", () => {
    const intern = new Intern('A', 'email.com', 'schoolName');

    expect(intern.getEmail()).toBe(intern.email);
});

test("gets intern's school", () => {
    const intern = new Intern('A', 'email.com', 'schoolName');

    expect(intern.getSchool()).toBe(intern.school);
});

test("gets intern's role", () => {
    const intern = new Intern('A', 'email.com', 'schoolName');

    expect(intern.getRole()).toBe('Intern');
});

