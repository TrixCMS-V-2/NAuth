# NodeAuth

NodeAuth is an library for TrxCMS, for using custom auth between NodeJS and TrixCMS By NodeNXT. (For exemple : For your modded minecraft project...)

#### Warning : You need install the "Auth" Plugin on your dashboard https://trixcms.eu/marketplace/resource/plugin/6

<hr>

> For use this library, you must copy this code, and modify it for your needs.

### This librairy can be used to, for example, link your ElectronJS minecraft launcher to your users.

#### You can download this library via npm.

`npm i @trixcms/nauth`

```javascript
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
```

<<<<<<< HEAD
<<<<<<< HEAD
=======
> You can download this library via npm.

`npm install nodeauth`

>>>>>>> 3ec76de... Update README.md
=======
>>>>>>> 5e0776b... Update README.md
> By NodeNXT For TrixCMS.
