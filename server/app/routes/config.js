module.exports = function(app) {

	var api = app.api.config;

	app.route('/v1/config')
		.get(api.lista)
		.post(api.adiciona);

	//app.route('/v1/config/:id')
		// .get(api.buscaPorId)
		// .delete(api.removePorId)
		// .put(api.atualiza);
};
