module.exports = function(app) {

	var api = app.api.lanche;

	app.route('/v1/lanche')
		.get(api.lista)
		.post(api.adiciona);

	//app.route('/v1/lanche/:id')
		// .get(api.buscaPorId)
		// .delete(api.removePorId)
		// .put(api.atualiza);
	app.route('/v1/lanche/categoria/:id')
	.get(api.listaCategoria)
};
