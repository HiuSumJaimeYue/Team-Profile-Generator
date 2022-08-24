const Engineer = require('../lib/Engineer');

test('creates a Engineer object', () => {
    const engineer = new Engineer('A', 1, 'email.com', 'githubUserName');

    expect(engineer.name).toBe('A');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

});

test("gets Engineer's name", () => {
    const engineer = new Engineer('A', 1, 'email.com', 'githubUserName');

    expect(engineer.getName()).toBe(engineer.name);
});

test("gets Engineer's id", () => {
    const engineer = new Engineer('A', 1, 'email.com', 'githubUserName');

    expect(engineer.getId()).toBe(engineer.id);
});

test("gets Engineer's email", () => {
    const engineer = new Engineer('A', 1, 'email.com', 'githubUserName');

    expect(engineer.getEmail()).toBe(engineer.email);
});

test("gets Engineer's github", () => {
    const engineer = new Engineer('A', 1, 'email.com', 'githubUserName');

    expect(engineer.getGithub()).toBe(engineer.github);
});

test("gets Engineer's role", () => {
    const engineer = new Engineer('A', 1, 'email.com', 'githubUserName');

    expect(engineer.getRole()).toBe('Engineer');
});

