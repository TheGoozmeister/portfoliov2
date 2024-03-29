const skillsetTexts = {
    eng: {
        title: "A solid trunk",
        intro: "During my transition to becoming a web developer, I've cultivated both Front End and Back End skills, leveraging various libraries and database manipulation. Now, I aim to enhance my expertise in cybersecurity by delving into different protocols, Linux, and all the necessary tools for a robust cybersecurity strategy.",
        outro: "Access my projects to see the practical implementation of these various skills.",
        button: "Projects",
        board: "Access to the skill tree",
        exit: "Go back to the application"
    },
    fr: {
        title: "Un tronc solide",
        intro: "Au cours de ma reconversion en developpeur web, j'ai acquis  des competences Front End et Back End, utilisant differentes librairies et la manipulation de bases de donnees. Je me spécialise maintenant dans la cybersecurite en etudiant les protocoles TCP/IP, Linux, et tout les outils necessaires à une bonne strategie de cybersecurite.",
        outro: "Accedez à mes projets pour voir la mise en pratique de ces diverses competences",
        button: "Projets",
        board: "Acceder a l'arbre de competence",
        exit: "Revenir à l'application"
    }
}

export const hardSkillsTexts = {
    eng: [
        {
            techno: "HTML/CSS",
            skills: [
                "· Create and/or integrate a mockup",
                "· Use of CSS frameworks and preprocessors", 
                "· SEO optimization",
                "· Accessibility optimization"
            ],
            icon: '<i class="fa-brands fa-html5"></i>',
            subs : [
                '<i class="fa-brands fa-sass"></i>',
                '<i class="fa-brands fa-bootstrap"></i>',
                '<i class="fa-solid fa-magnifying-glass-chart"></i>',
                '<i class="fa-brands fa-accessible-icon"></i>',
                '<i class="fa-brands fa-figma"></i>'
            ],
            img : 'htmlcss.png'
        },
        {
            techno: "JAVASCRIPT/TYPESCRIPT",
            skills: [
                "· Writing typed, optimized, and maintainable code",
                "· Algorithms and data manipulation"
            ],
            icon: '<i class="fa-brands fa-js"></i>',
            subs : [
                '<i class="fa-solid fa-chart-simple"></i>'
            ],
            img : 'javascript.png'
        },
        {
            techno: "REACT/REDUX",
            skills: [
                "· Developing SPA applications",
                "· Authentication services and data security",
                "· Using global state managers for an application"
            ],
            icon: '<i class="fa-brands fa-react"></i>',
            subs : [
                '<i class="fa-solid fa-store"></i>'
            ],
            img : 'react.png'
        },
        {
            techno: "NODEJS/EXPRESS",
            skills: [
                "· Creating a secure API",
                "· Data protection",
                "· Using frameworks"
            ],
            icon: '<i class="fa-brands fa-node">',
            subs : [
                '<i class="fa-brands fa-node-js"></i>'
            ],
            img : 'node.png'
        },
        {
            techno: "MONGODB/SQL",
            skills: [
                "· Structuring databases",
                "· Database manipulation",
                "· Database security"
            ],
            icon: '<i class="fa-solid fa-database"></i>',
            subs : [
                '<i class="fa-solid fa-diagram-project"></i>'
            ],
            img : 'sql.png'
        },
        {
            techno: "OTHER TOOLS",
            skills: [
                "· Code versioning with GIT",
                "· Deploying an application online with Docker",
                "· Agile project management with Kanban"
            ],
            icon: '<i class="fa-brands fa-github"></i>',
            subs : [
                '<i class="fa-brands fa-docker"></i>',
                '<i class="fa-solid fa-chalkboard-user"></i>'
            ],
            img : 'git.png'
        },
    ],
    fr: [
        {
            techno: "HTML/CSS",
            skills: [
                        "· Realiser et/ou integrer une maquette",
                        "· Utilisation de frameworks et de preprocesseurs CSS", 
                        "· Optimisation SEO","Optimisation accessibilite"
                    ],
            icon: '<i class="fa-brands fa-html5"></i>',
            subs : [
                '<i class="fa-brands fa-sass"></i>',
                '<i class="fa-brands fa-bootstrap"></i>',
                '<i class="fa-solid fa-magnifying-glass-chart"></i>',
                '<i class="fa-brands fa-accessible-icon"></i>',
                '<i class="fa-brands fa-figma"></i>'
            ],
            img : 'htmlcss.png'
        },
        {
            techno: "JAVASCRIPT/TYPESCRIPT",
            skills: [
                "· Ecriture de code type, optimise et maintenable",
                "· Algorithmie et manipulation de donnees"
            ],
            icon: '<i class="fa-brands fa-js"></i>',
            subs : [
                '<i class="fa-solid fa-chart-simple"></i>'
            ],
            img : 'javascript.png'
        },
        {
            techno: "REACT/REDUX",
            skills: [
                "· Developpement d'applications SPA",
                "· Services d'authentification et securisation des donnees",
                "· Utilisation de gestionnaire d'etats globaux pour une application"
            ],
            icon: '<i class="fa-brands fa-react"></i>',
            subs : [
                '<i class="fa-solid fa-store"></i>'
            ],
            img : 'react.png'
        },
        {
            techno: "NODEJS/EXPRESS",
            skills: [
                "· Realisation d'une API securisee",
                "· Protection des donnees",
                "· Utilisation de framework"
            ],
            icon: '<i class="fa-brands fa-node">',
            subs : [
                '<i class="fa-solid fa-diagram-project"></i>'
            ],
            img : 'node.png'
        },
        {
            techno: "MONGODB/SQL",
            skills: [
                "· Structuration de bases de donnees",
                "· Manipulation de bases de donnees",
                "· Securisation de bases de donnees"
            ],
            icon: '<i class="fa-solid fa-database"></i>',
            subs : [
                '<i class="fa-solid fa-diagram-project"></i>'
            ],
            img : 'sql.png'
        },
        {
            techno: "OTHER TOOLS",
            skills: [
                "· Versionnage du code avec GIT",
                "· Deploiement d'une application en ligne avec Docker",
                "· Gestion de projets agile avec Kanban"
            ],
            icon: '<i class="fa-brands fa-github"></i>',
            subs : [
                '<i class="fa-brands fa-docker"></i>',
                '<i class="fa-solid fa-chalkboard-user"></i>'
            ],
            img : 'git.png'
        },
    ],
}


export default skillsetTexts;