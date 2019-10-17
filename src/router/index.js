import Vue from 'vue'
import Router from 'vue-router'
import EmptyViewRouter from '@/components/EmptyViewRouter'

import ForgotPassword from '@/Pages/ForgotPassword'
import LockScreen from '@/Pages/LockScreen'
import Login from '@/Pages/Login'
import Cadaster from '@/Pages/Cadaster'
import Logout from '@/Pages/Logout'

// ADMIN
import Home from '@/Pages/Admin/Home'

// Relatórios
import User from '@/Pages/Admin/Report/User'
import Partners from '@/Pages/Admin/Report/Partners'
import Product from '@/Pages/Admin/Report/Product'
import AccessTenantProvider from '@/Pages/Admin/Report/AccessTenantProvider'
import AccessProductsServices from '@/Pages/Admin/Report/AccessProductsServices'

// Cadastro
import ShopkeeperProvider from '@/Pages/Admin/Cadaster/ShopkeeperProvider'
import ProductsService from '@/Pages/Admin/Cadaster/ProductsService'
import ProfileTradeServices from '@/Pages/Admin/Cadaster/ProfileTradeServices'
import ServicePlans from '@/Pages/Admin/Cadaster/ServicePlans'


// CLIENT
import HomeClient from '@/Pages/Client/HomeClient'
import EditData from '@/Pages/Client/EditData'



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
      path: '/cadastro',
      name: 'Cadaster',
      component: Cadaster
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

      ]},
      {
        path: '/client',
        name: 'client',
        component: EmptyViewRouter,
        children:[{
          path: 'home',
          name: 'Home Cliente',
          component: HomeClient
        },
        {
          path: 'meus-dados',
          name: 'Editar Dados Cadastrais',
          component: EditData
        }
      ]}
  ]
})

