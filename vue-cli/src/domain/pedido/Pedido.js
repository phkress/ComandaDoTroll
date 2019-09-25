export default class Pedido {
    constructor(listaDePedidos=[], mesa="", status="", codigo="") {
      this.listaDePedidos = listaDePedidos;
      this.status = status;
      this.mesa = mesa;
      this.codigo = codigo;
    }
  }
