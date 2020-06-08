# NAuth


NAuth est une librairie pour authentifier des utilisateurs de votre site TrixCMS en NodeJS.

## Prérequis

Avant d'utiliser NAuth vous devez installer le plugin [Auth](https://trixcms.eu/marketplace/resource/plugin/6) sur votre CMS.

## Installation

Vous pouvez installer la bibliothèque via npm :
```bash
npm install @trixcms/nauth
```

## Utilisation

Tout d'abord vous devez définir une instance de NAuth. Le constructeur prendra en premier paramètre l'URL de votre site TrixCMS et en second paramètre facultatif, un timeout en miliseconde. :
```javascript
const NAuth = require('@trixcms/nauth')

const auth = new NAuth('http://website.domain')
```

### Vérifier qu'un utilisateur existe

Vous pouvez vérifier qu'un utilisateur existe avec la méthod `exists(username: string): Promise<boolean>` qui prendra le nom d'utilisateur en paramètre. La méthode vous retournera une promesse.
```javascript
const username = "username"

auth.exists(username)
    .then((exists) => {

        if(exists) {
            console.log('Le compte existe.')
        } else {
            console.log('Le compte n\'existe pas.')
        }

    })
    .catch(err => {
        console.error("Une erreur est survenue.")
    })
```

### Récupérer les informations d'un utilisateur

Vous pouvez vérifier qu'un utilisateur existe avec la méthod `login(username: string, password: string): Promise<Profile>` qui prendra le nom d'utilisateur et un mot de passe en paramètre. La méthode vous retournera une promesse avec le profile.

```javascript
const username = "username"
const password = "password";

auth.login(username, password)
    .then((profile) => {
        console.log(profile);
    })
    .catch(err => {
        if(err.code === 'INVALID_CREDENTIALS') {
            console.error('Identifiants invalides.')
        } else {
            console.error("Une erreur est survenue.")
        }
    })
```

Liste des propriétés disponnible dans le profile :

| Propriété   | Type           | Description                                                   |
| ----------- | -------------- | ------------------------------------------------------------- |
| id          | string         | L'identifiant de l'utilisateur.                               |
| uuid        | string         | UUID de l'utilisateur.                                        |
| username    | string         | Nom d'utilisateur de l'utilisateur.                           |
| email       | string         | Adresse email de l'utilisateur.                               |
| money       | number         | Nombre de point boutique de l'utilisateur.                    |
| hasAvatar   | boolean        | Est-ce que l'utilisateur à un avatar.                         |
| isBanned    | boolean        | Est-ce que l'utilisateur est banni.                           |
| banReason   | string \| null | La raison du bannissement si l'utilisateur est banni.         |
| isConfirmed | boolean        | Est-ce que l'utilisateur à confirmé son adresse email.        |
| hasTwoAuth  | boolean        | Est-ce que l'utilisateur à activé la double authentification. |
| ranks       | Array<string>  | Liste des rangs de l'utilisateur.                             |
| token       | string         | Token de l'utilisateur.                                       |
| createdAt   | Date           | Date de création du compte.                                   |
| updatedAt   | Date           | Date de dernière modification du compte.                      |

### Example de code

```javascript
const NAuth = require('./build/index')

// On créer
const auth = new NAuth("https://example.domain/", 10000)

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
                        // Les identifiants du compte sont invalides
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
    .catch(err => {
        console.log("Une erreur est survenue.")
    })
```

[![Build Status](https://img.shields.io/github/forks/TrixCMS-V-2/NAuth.svg?style=for-the-badge)](https://github.com/TrixCMS-V-2/NAuth)
[![Build Status](https://img.shields.io/github/stars/TrixCMS-V-2/NAuth.svg?style=for-the-badge)](https://github.com/TrixCMS-V-2/NAuth)
[![License](https://img.shields.io/github/license/TrixCMS-V-2/NAuth.svg?style=for-the-badge)](https://github.com/TrixCMS-V-2/NAuth)
[![Latest Stable Version](https://img.shields.io/npm/v/TrixCMS-V-2/NAuth.svg?style=for-the-badge)](https://www.npmjs.com/package/TrixCMS-V-2/NAuth)