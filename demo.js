const NAuth = require('./build/index')

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