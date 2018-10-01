const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
    app.post('/register', AuthControllerPolicy.register, AuthController.register)

    app.post('/login', AuthController.login)

    app.get('/songs', SongsController.index)

    app.post('/songs', SongsController.post)

    app.get('/songs/:songId', SongsController.show)

    app.put('/songs/:songId', SongsController.put)

    app.get('/bookmarks', BookmarksController.index)

    app.post('/bookmarks', BookmarksController.post)

    app.delete('/bookmarks/:bookmarkId', BookmarksController.delete)
}
