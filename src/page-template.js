//Generate code for team member cards 
const generateCards = membersArr => {
    return `
        ${membersArr
            .filter(member => member.getRole() === 'Engineer')
            .map(member => {
                return `
                <div class="mb-3 col-12 col-md-6 col-lg-4">
                <div class="shadow card border-0">
                    <h3 class="card-header">
                        ${member.getName()}
                    </h3>
                    <h3 class="card-header">
                        <i class="fa fa-desktop" aria-hidden="true"></i> ${member.getRole()}
                    </h3>
                    <div class="card-body">
                        <p class="card-text">ID: ${member.getId()}</p>

                        <p class="card-text">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}
                        </a></p>

                        <p class="card-text">Github: <a href="https://github.com/${member.getGithub()}" target="_blank"
                        rel="noopener noreferrer">
                        ${member.getGithub()}</a>
                </p>
                    </div>
                </div>
            </div>
          `;
            })
            .join('')}

            ${membersArr
                .filter(member => member.getRole() === 'Intern')
                .map(member => {
                    return `
                    <div class="mb-3 col-12 col-md-6 col-lg-4">
                    <div class="shadow card border-0">
                        <h3 class="card-header">
                            ${member.getName()}
                        </h3>
                        <h3 class="card-header">
                            <i class="fa fa-graduation-cap" aria-hidden="true"></i> ${member.getRole()}
                        </h3>
                        <div class="card-body">
                            <p class="card-text">ID: ${member.getId()}</p>
    
                            <p class="card-text">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}
                            </a></p>
    
                            <p class="card-text">School: ${member.getSchool()}</p>
                    </p>
                        </div>
                    </div>
                </div>
              `;
                })
                .join('')}

    `;
};

//Generate code using data from index.js
function generatePage(templateData){
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
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
                <div class="shadow card border-0">
                    <h3 class="card-header">
                        ${templateData.manager.getName()}
                    </h3>
                    <h3 class="card-header">
                        <i class="fa fa-user" aria-hidden="true"></i> ${templateData.manager.getRole()}
                    </h3>
                    <div class="card-body">
                        <p class="card-text">ID: ${templateData.manager.getId()}</p>
                    
                        <p class="card-text">Email: <a href="mailto:${templateData.manager.getEmail()}">
                        ${templateData.manager.getEmail()}
                        </a></p>

                        <p class="card-text">Office number: ${templateData.manager.officeNumber}</p>
                    </div>
                </div>
            </div>
            ${generateCards(templateData.members)}
        </section>

    </main>

</body>

</html>`;

}

module.exports = generatePage;