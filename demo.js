const NAuth = require('./build/index')

// On créer
const auth = new NAuth("https://domain.website.extension/", 10000)

// On vérifie que le compte "admin" existe.
auth.exists("admin")
    .then((exists) => {
        if (exists) {
            // Le compte "admin" existe !

            // On récupère le profile du compte grâce à la methode login.
            auth.login("admin", "123456789")
                .then((profile) => {

                    // faculatif
                    if (profile.isBanned) {
                        // Ce compte est banni
                        return console.log('Ce compte est banni.')
                    }

                    // faculatif
                    if (!profile.isConfirmed) {
                        // Ce compte à validé son addresse email.
                        return console.log('Ce compte n\'est pas confirmé')
                    }

                    // Vous pouvez récupérer les informations sur le compte :
                    const uuid = profile.uuid
                    const username = profile.username
                    const email = profile.email
                    const token = profile.token

                    console.log('Voici les informations sur le compte admin:', uuid, username, email, token)
                })
                .catch((err) => {
                    if (err.code === 'INVALID_CREDENTIALS') {
                        // Les identifiants du compte sont invalident
                        console.log("Les identifiants du compte sont invalident.")
                    } else {
                        // Une autre erreur est survenue.
                        console.log("Une erreur est survenue.")
                    }
                })
        } else {
            // Le compte "admin" n'existe pas !
            console.log('Ce compte n\'existe pas')
        }
    })