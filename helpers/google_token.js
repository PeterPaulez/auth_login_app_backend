const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '979794623867-ktggdjkfdp9e4vg4u4n1qrpq3m3jrbhh.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);

const validarGoogleToken = async ( token ) => {
    try {        
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
            CLIENT_ID,
            '979794623867-miq1l0gfiei0rtbsbimhcapbonjcf6dq.apps.googleusercontent.com',
            '979794623867-6jkh3qov75hntejig3qis1d7744csaiv.apps.googleusercontent.com',
            ], 
        });
        const payload = ticket.getPayload();
        console.log('====== PAYLOAD ======');
        console.log(payload);

        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
            userid: payload['sub']
        }
    } catch (error) {
        return null;
    }
}

module.exports = {
    validarGoogleToken
}
