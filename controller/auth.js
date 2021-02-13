const { response } = require('express');

const googleAuth = (request, answer = response ) => {
    // TODO: Obtener Token

    let token = request.body.token;
    answer.json({
        ok: true,
        token: token
    });

    return answer;
}

// Export de las funcs para que se puedan leer desde fuera
module.exports = {
    googleAuth
}