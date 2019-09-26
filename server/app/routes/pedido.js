module.exports = function(app) {

	var api = app.api.pedido;

	app.route('/v1/pedido')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/pedido/:id')
		.put(api.atualiza);
		// .get(api.buscaPorId)
		// .delete(api.removePorId)

	app.route('/v1/pedido/contador/:mesa')
		.get(api.contadorMesa);
		
	app.route('/v1/pedido/contador/:mesa/:status')
	.get(api.contadorMesaStatus);
};
