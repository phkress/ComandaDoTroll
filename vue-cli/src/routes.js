import Home from './components/home/Home.vue';
import Cozinha from './components/cozinha/Cozinha.vue';
import Boqueta from './components/boqueta/Boqueta.vue';
import Mesa from './components/mesa/Mesa.vue';
import Pedido from './components/pedido/Pedido.vue';
import Configuracao from './components/configuracao/Configuracao.vue';
export const routes = [
  {path: '*', name:'Cozinha', component: Cozinha, titulo: 'Cozinha', menu: false},
  //{path: '', name:'Cozinha', component: Cozinha, titulo: 'Cozinha', menu: false},  
  {path: '/cozinha', name:'Cozinha', component: Cozinha, titulo: 'Cozinha', menu: true},
  {path: '/boqueta', name:'Boqueta', component: Boqueta, titulo: 'Boqueta', menu: false},
  {path: '/mesa', name:'Mesa', component: Mesa, titulo: 'Mesa', menu: true},
  {path: '/pedido', name:'Pedido', component: Pedido, titulo: 'Pedido', menu: false},
  {path: '/configuracao', name:'Configuração', component: Configuracao, titulo: 'Configuração', menu: false},
];
