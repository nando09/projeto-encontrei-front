import Vue from 'vue'
import Router from 'vue-router'
import EmptyViewRouter from '@/components/EmptyViewRouter'

import ForgotPassword from '@/Pages/ForgotPassword'
import LockScreen from '@/Pages/LockScreen'
import Login from '@/Pages/Login'
import Cadaster from '@/Pages/Cadaster'
import CadasterAdmin from '@/Pages/CadasterAdmin'
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
import Usuario from '@/Pages/Admin/Cadaster/Usuario'


// CLIENT
import HomeClient from '@/Pages/Client/HomeClient'
import EditData from '@/Pages/Client/EditData'
import Products from '@/Pages/Client/Products'
import AccessReport from '@/Pages/Client/AccessReport'
import RelatorioProdutosCliente from '@/Pages/Client/RelatorioProdutosCliente'
import MercadoPago from '@/Pages/Client/MercadoPago'



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
      path: '/cadastro-usuario',
      name: 'User Cadaster',
      component: Cadaster
    },
    {
      path: '/cadastro-admin',
      name: 'Admin Cadaster',
      component: CadasterAdmin
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
      path: '/dados-usuario',
      component: Usuario
    },
    {
      path: '/relatorio',
      name: 'Relatório',
      component: EmptyViewRouter,
      children: [
        {
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
      ]
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: EmptyViewRouter,
      children: [
        {
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
      ]
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: EmptyViewRouter,
      children:[
        {
          path: '/',
          name: 'Home Usuário',
          component: HomeClient
        },
        {
          path: 'meus-dados',
          name: 'Editar Dados Cadastrais',
          component: EditData
        },
        {
          path: 'produtos',
          name: 'Produtos',
          component: Products
        },
        {
          path: 'relatorio',
          name: 'Relatorio de Acessos',
          component: AccessReport
        },
        {
          path: 'relatorio/produtos',
          name: 'Relatorio de Produtos',
          component: RelatorioProdutosCliente
        },
        {
          path: 'pagamento',
          name: 'pagamento',
          component: MercadoPago
        }
      ]
    }
  ]
})

