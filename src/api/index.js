//instantiate api routes

/**WARNING: Please note ...GENERATOR... should not be modified or deleted */

module.exports = (router) => {
    router.use('/api/authentication', require('./auth-routes'));
	router.use('/api/qr-codes', require('./qr-codes-routes'));
	router.use('/api/trashes', require('./trashes-routes'));
	router.use('/api/users', require('./users-routes'));
	//...GENERATOR...
}