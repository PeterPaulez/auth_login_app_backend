const { response } = require('express');
const { validarGoogleToken } = require('../helpers/google_token');

const googleAuth = async (request, answer = response ) => {
    let token = request.body.token;
    if ( !token ) {
        return answer.status(400).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    const googleUser = await validarGoogleToken(token);

    if (!googleUser) {
        return answer.status(400).json({
            ok: false,
            msg: 'Token de google inválido'
        });
    }

    return answer.json({
        ok: true,
        googleUser
    });
}

// Export de las funcs para que se puedan leer desde fuera
module.exports = {
    googleAuth
}