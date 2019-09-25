module.exports = function(app) {

	var api = app.api.pedido;

	app.route('/v1/pedido')
		.get(api.lista)
		.post(api.adiciona);

	//app.route('/v1/pedido/:id')
		// .get(api.buscaPorId)
		// .delete(api.removePorId)
		// .put(api.atualiza);
	
};