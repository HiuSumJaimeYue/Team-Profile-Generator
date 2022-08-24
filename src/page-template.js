const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateCards = membersArr => {
    return `
        ${membersArr
            .map(({ name, id, email}) => {
                return `
                <div class="mb-3  col-12 col-md-6 col-lg-4">
                <div class="card">
                    <h3 class="card-header">
                        ${name}
                    </h3>
                    <h3 class="card-header">
                        ${name}
                    </h3>
                    <div class="card-body">
                        <p class="card-text">ID: ${id}</p>
                        <p class="card-text">Github: <a href="https://github.com/s" target="_blank"
                                rel="noopener noreferrer">
                                GitHub</a>
                        </p>
                        <p class="card-text">Email: <a href="mailto:${email}">${email}
                        </a></p>
                    </div>
                </div>
            </div>
          `;
            })
            .join('')}
        </div>
      </section>
    `;
};

function generatePage(templateData){
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="style.css" />
    <title>Team Profile</title>
</head>

<body>
    <header class="jumbotron">
        <h1>My Team</h1>
    </header>
    <main class="container">
        <section class="row justify-content-around">
            <div class="mb-3 col-12 col-md-6 col-lg-4">
                <div class="card">
                    <h3 class="card-header">
                        ${templateData.manager.getName()}
                    </h3>
                    <div class="card-body">
                        <p class="card-text">${templateData.manager.getRole()}</p>
                    </div>
                </div>
            </div>
            <div class="mb-3  col-12 col-md-6 col-lg-4">
                <div class="card">
                    <h3 class="card-header">
                        Service 2
                    </h3>
                    <div class="card-body">
                        <p class="card-text">Role</p>
                    </div>
                </div>
            </div>
            <div class="mb-3  col-12 col-md-6 col-lg-4">
                <div class="card">
                    <h3 class="card-header">
                        ${templateData.manager.getName()}
                    </h3>
                    <h3 class="card-header">
                        ${templateData.manager.getRole()}
                    </h3>
                    <div class="card-body">
                        <p class="card-text">ID: ${templateData.manager.getId()}</p>
                        <p class="card-text">Github: <a href="https://github.com/s" target="_blank"
                                rel="noopener noreferrer">
                                ${templateData.manager.getName()}</a>
                        </p>
                        <p class="card-text">Email: <a href="mailto:s">s
                        </a></p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <h3 class="card-header">
                        Service 3
                    </h3>
                    <div class="card-body">
                        <p class="card-text">Role</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <h3 class="card-header">
                        Service 3
                    </h3>
                    <div class="card-body">
                        <p class="card-text">
                            role
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </main>

</body>

</html>`;

}

module.exports = generatePage;