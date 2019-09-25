export default class Pedido {
    constructor(listaDePedidos=[], mesa="", status="") {
      this.listaDePedidos = listaDePedidos;
      this.status = status;
      this.mesa = mesa;
    }
  }
