# NAuth

NAuth is a library to authenticate users of your TrixCMS site in NodeJS.

## Prerequisites

Before using NAuth you must install the [Auth](https://trixcms.eu/marketplace/resource/plugin/7) plugin on your CMS

## Installation

You can install the library via npm:
```bash
npm install @trixcms/nauth
```

## How to use ?

First you need to define an instance of NAuth. The manufacturer will take the URL of your TrixCMS site as the first parameter and an optional second parameter, a timeout in milliseconds:
```javascript
const NAuth = require('@trixcms/nauth')

const auth = new NAuth('http://website.domain')
```

### Verify that a user exist

You can verify that a user exists with the `exists (username: string): Promise <boolean>` method which will take the username as a parameter. The method will return a promise to you.
```javascript
const username = 'username'

auth.exists(username)
    .then((exists) => {

        if(exists) {
            console.log('The account exists.')
        } else {
            console.log('The account does not exists.')
        }

    })
    .catch(() => {
        console.error('An error has occurred.')
    })
```

### Retrieve user information

You can verify that a user exists with the `login (username: string, password: string): Promise <Profile>` method which will take the username and password as parameters. The method will return you a promise with the profile:

```javascript
const username = 'username'
const password = 'password'

auth.login(username, password)
    .then((profile) => {
        console.log(profile);
    })
    .catch(err => {
        if(err.code === 'INVALID_CREDENTIALS') {
            console.error('Bad credentials')
        } else {
            console.error('An error has occurred.')
        }
    })
```

List of properties available in the profile:

| Property    | Type           | Description                                   |
| ----------- | -------------- | --------------------------------------------- |
| id          | string         | The user ID.                                  |
| uuid        | string         | User UUID.                                    |
| username    | string         | Username of the user.                         |
| email       | string         | User email address.                           |
| money       | number         | Number of user store points.                  |
| hasAvatar   | boolean        | Does the user have an avatar.                 |
| isBanned    | boolean        | Is the user banned.                           |
| banReason   | string \| null | The reason for the ban if the user is banned. |
| isConfirmed | boolean        | Has the user confirmed their email address.   |
| hasTwoAuth  | boolean        | Has the user enabled dual authentication.     |
| ranks       | string\[\]     | List of user ranks.                           |
| token       | string         | User token.                                   |
| createdAt   | Date           | Date of creation of the account.              |
| updatedAt   | Date           | Date of last modification of the account.     |

### Code example

```javascript
const NAuth = require('@trixcms/nauth')

// We create an instance of NAuth
const auth = new NAuth('https://example.domain/', 10000)

// We verify that the 'admin' account exists.
auth.exists('admin')
    .then((exists) => {
        if (exists) {
            // The 'admin' account exists!

            // We retrieve the account profile using the login method.
            auth.login('admin', '123456789')
                .then((profile) => {

                    // optional
                    if (profile.isBanned) {
                        // This account is banned
                        return console.log('This account is banned')
                    }

                    // optional
                    if (!profile.isConfirmed) {
                        // This account has not validated its email address.
                        return console.log('This account has not validated its email address.')
                    }

                    // You can retrieve account information:
                    const uuid = profile.uuid
                    const username = profile.username
                    const email = profile.email
                    const token = profile.token

                    console.log('Here is the information about the admin account:', uuid, username, email, token)
                })
                .catch((err) => {
                    if (err.code === 'INVALID_CREDENTIALS') {
                        // Account credentials are invalid.
                        console.log('Account credentials are invalid.')
                    } else {
                        // An error has occurred.
                        console.log('An error has occurred.')
                    }
                })
        } else {
            // The 'admin' account does not exist!
            console.log('This account does not exist')
        }
    })
    .catch(() => {
        console.log('An error has occurred.')
    })
```

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/TrixCMS-V-2/NAuth?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/TrixCMS-V-2/NAuth?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/TrixCMS-V-2/NAuth?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/@trixcms/nauth?style=for-the-badge)
![GitHub package.json version](https://img.shields.io/github/package-json/v/TrixCMS-V-2/NAuth?style=for-the-badge)
