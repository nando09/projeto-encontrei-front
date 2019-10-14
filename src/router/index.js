import Vue from 'vue'
import Router from 'vue-router'
import EmptyViewRouter from '@/components/EmptyViewRouter'

import Home from '@/Pages/Home'
import ForgotPassword from '@/Pages/ForgotPassword'
import LockScreen from '@/Pages/LockScreen'
import Login from '@/Pages/Login'
import Logout from '@/Pages/Logout'

// Relatórios
import User from '@/Pages/Report/User'
import Partners from '@/Pages/Report/Partners'
import Product from '@/Pages/Report/Product'
import AccessTenantProvider from '@/Pages/Report/AccessTenantProvider'
import AccessProductsServices from '@/Pages/Report/AccessProductsServices'

// Cadastro
import ShopkeeperProvider from '@/Pages/Cadaster/ShopkeeperProvider'
import ProductsService from '@/Pages/Cadaster/ProductsService'
import ProfileTradeServices from '@/Pages/Cadaster/ProfileTradeServices'
import ServicePlans from '@/Pages/Cadaster/ServicePlans'






Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/esqueceu-senha',
      name: 'Esqueceu Senha',
      component: ForgotPassword
    },
    {
      path: '/bloquear-tela',
      name: 'Tela de Bloqueio',
      component: LockScreen
    },
    {
      path: '/relatorio',
      name: 'Relatório',
      component: EmptyViewRouter,
      children: [{
        path: 'usuario',
        component: User
      },
      {
        path: 'parceiro',
        component: Partners
      },
      {
        path: 'produto',
        component: Product
      },
      {
        path: 'acesso-lojista-prestador',
        component: AccessTenantProvider
      },
      {
        path: 'acesso-produto-servico',
        component: AccessProductsServices
      }
      ]},
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: EmptyViewRouter,
      children: [{
        path: 'lojista-prestador',
        component: ShopkeeperProvider
      },
      {
        path: 'produtos-servicos',
        component: ProductsService
      },
      {
        path: 'perfil-comercio-servicos',
        component: ProfileTradeServices
      },
      {
        path: 'planos-servico',
        component: ServicePlans
      }

      ]}

  ]
})

