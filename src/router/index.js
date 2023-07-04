import Vue from 'vue'
import VueRouter from 'vue-router'

// Dashboard
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/dashboard/Home.vue'
import Equity from '../views/dashboard/Equity.vue'
import Assets from '../views/dashboard/Assets.vue'
import Liabilities from '../views/dashboard/Liabilities.vue'
import Combo from '../views/dashboard/Combo.vue'

// CashFlow
import CashFlow from '../views/CashFlow.vue'
import Analyze from '../views/cashflow/Analyze.vue'
import Income from '../views/cashflow/Income.vue'
import Expenses from '../views/cashflow/Expenses.vue'
import Debt from '../views/cashflow/Debt.vue'

import CashHome from '../views/cashflow/cash/CashHome.vue'
import WellsFargo from '../views/cashflow/cash/WellsFargo.vue'
import WellsFargoInformation from '../views/cashflow/cash/wells-fargo/WellsFargoInformation.vue'
import WellsFargoInformationMenu from '../views/cashflow/cash/wells-fargo/WellsFargoInformationMenu.vue'
import WellsFargoMoveMoney from '../views/cashflow/cash/wells-fargo/WellsFargoMoveMoney.vue'

import WellsFargoDetails from '../views/cashflow/cash/wells-fargo/information/WellsFargoDetails.vue'
import WellsFargoDocuments from '../views/cashflow/cash/wells-fargo/information/WellsFargoDocuments.vue'
import WellsFargoAnalyze from '../views/cashflow/cash/wells-fargo/information/WellsFargoAnalyze.vue'
import WellsFargoCostValue from '../views/cashflow/cash/wells-fargo/information/WellsFargoCostValue.vue'

import WellsFargoTransfer from '../views/cashflow/cash/wells-fargo/move-money/WellsFargoTransfer.vue'
import WellsFargoSweep from '../views/cashflow/cash/wells-fargo/move-money/WellsFargoSweep.vue'
import WellsFargoBillPay from '../views/cashflow/cash/wells-fargo/move-money/WellsFargoBillPay.vue'
import WellsFargoSend from '../views/cashflow/cash/wells-fargo/move-money/WellsFargoSend.vue'

import BankSaving from '../views/cashflow/cash/BankSaving.vue'

import InvestmentHome from '../views/cashflow/investment/InvestmentHome.vue'
import InvestmentAnalyze from '../views/cashflow/investment/InvestmentAnalyze.vue'
import Greenstar from '../views/cashflow/investment/Greenstar.vue'

import Investment from '../views/Investment.vue'
import RealEstate from '../views/RealEstate.vue'
import Insurance from '../views/Insurance.vue'
import LegalPlanning from '../views/LegalPlanning.vue'
import TaxPlanning from '../views/TaxPlanning.vue'
import Goal from '../views/Goal.vue'
import Learn from '../views/Learn.vue'
import Market from '../views/Market.vue'

// Settings
import Settings from '../views/Settings.vue'
import ProfileSettings from "../views/settings/ProfileSettings"
import InputSettings from "../views/settings/InputSettings"
import DisplaySettings from "../views/settings/DisplaySettings"
import SecuritySettings from "../views/settings/SecuritySettings"


import Help from '../views/Help.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/dashboard',
},
{
  path: '/dashboard',
  component: Dashboard,
  children: [{
    path: '/',
    component: Home,
    meta: { title: 'Dashboard' },
  },
  {
    path: '/dashboard/enquity',
    component: Equity
  },
  {
    path: '/dashboard/asset',
    component: Assets
  },
  {
    path: '/dashboard/liabilities',
    component: Liabilities
  },
  {
    path: '/dashboard/combo',
    component: Combo
  }
  ]
},
// {
//   path: '/cash-flows',
//   name: 'CashFlow',
//   component: CashFlow,
//   children: [
{
  path: '/cash-flows',
  component: CashFlow,
  meta: {
    title: 'Cashflow',
    background: 'flex bg-orange-light'
  },
  children: [
    {
      path: '/',
      component: Analyze,
      meta: {
        title: 'Cashflow',
        background: 'flex bg-orange-light'
      },
    },
    {
      path: '/cash-flows/income',
      component: Income,
      meta: {
        title: 'Cashflow',
        background: 'flex bg-orange-light'
      },
    },
    {
      path: '/cash-flows/expenses',
      component: Expenses,
      meta: {
        title: 'Cashflow',
        background: 'flex bg-orange-light'
      },
    },
    {
      path: '/cash-flows/debt',
      component: Debt,
      meta: {
        title: 'Cashflow',
        background: 'flex bg-orange-light'
      },
    },
  ],
},
// {
//   path: '/cash-flows/assets/cash',
//   component: CashHome,
//   meta: {
//     title: 'Cashflow',
//     background: 'flex bg-orange-light'
//   },
//   children: [
{
  path: '/cash-flows/assets/cash/wells-fargo',
  component: WellsFargo,
  meta: {
    title: 'Cashflow',
    background: 'flex bg-orange-light'
  },
  children: [
    {
      path: '/cash-flows/assets/cash/wells-fargo/information',
      components: {
        default: WellsFargoInformation,
      },
      meta: {
        title: 'Cashflow',
        background: 'flex bg-orange-light'
      },
      children: [
        {
          path: '/cash-flows/assets/cash/wells-fargo/information',
          components: {
            default: WellsFargoDetails,
            'navigation-bar': WellsFargoInformationMenu,
          },
          meta: {
            title: 'Cashflow',
            background: 'flex bg-orange-light'
          },
        },
        {
          path: '/cash-flows/assets/cash/wells-fargo/information/documents',
          component: WellsFargoDocuments,
          meta: {
            title: 'Cashflow',
            background: 'flex bg-orange-light'
          },
        },
        {
          path: '/cash-flows/assets/cash/wells-fargo/information/analyze',
          component: WellsFargoAnalyze,
          meta: {
            title: 'Cashflow',
            background: 'flex bg-orange-light'
          },
        },
        {
          path: '/cash-flows/assets/cash/wells-fargo/information/cost-value',
          component: WellsFargoCostValue,
          meta: {
            title: 'Cashflow',
            background: 'flex bg-orange-light'
          },
        },
      ]
    },
    {
      path: '/cash-flows/assets/cash/wells-fargo/move-money',
      component: WellsFargoMoveMoney,
      meta: {
        title: 'Cashflow',
        background: 'flex bg-orange-light'
      },
      children: [

        {
          path: '/cash-flows/assets/cash/wells-fargo/move-money',
          component: WellsFargoTransfer,
          meta: {
            title: 'Cashflow',
            background: 'flex bg-orange-light'
          },
        },
        {
          path: '/cash-flows/assets/cash/wells-fargo/move-money/sweep',
          component: WellsFargoSweep,
          meta: {
            title: 'Cashflow',
            background: 'flex bg-orange-light'
          },
        },
        {
          path: '/cash-flows/assets/cash/wells-fargo/move-money/bill-pay',
          component: WellsFargoBillPay,
          meta: {
            title: 'Cashflow',
            background: 'flex bg-orange-light'
          },
        },
        {
          path: '/cash-flows/assets/cash/wells-fargo/move-money/send',
          component: WellsFargoSend,
          meta: {
            title: 'Cashflow',
            background: 'flex bg-orange-light'
          },
        },
      ]
    },
  ]
},
{
  path: '/cash-flows/assets/cash/bank-saving',
  component: BankSaving,
  meta: {
    title: 'Cashflow',
    background: 'flex bg-orange-light'
  },
},
//   ]
// },
{
  path: '/cash-flows/assets/investment',
  component: InvestmentHome,
  meta: {
    title: 'Cashflow',
    background: 'flex bg-orange-light'
  },
  children: [
    {
      path: '/cash-flows/assets/investment/greenstar',
      component: Greenstar,
      meta: {
        title: 'Cashflow',
        background: 'flex bg-orange-light'
      },
    },
    {
      path: '/cash-flows/assets/investment/greenstar/analyze',
      component: InvestmentAnalyze,
      meta: {
        title: 'Cashflow',
        background: 'flex bg-orange-light'
      },
    },
  ]
},

//   ],
//   meta: {
//     background: 'flex bg-orange-light'
//   }
// },
{
  path: '/investments',
  name: 'Investment',
  component: Investment,
  meta: {
    background: 'flex bg-green-light'
  }
},
{
  path: '/real-estates',
  name: 'RealEstate',
  component: RealEstate,
  meta: {
    background: 'flex bg-red-light'
  }
},
{
  path: '/insurances',
  name: 'Insurance',
  component: Insurance,
  meta: {
    background: 'flex bg-blue-soft'
  }
},
{
  path: '/legal-plannings',
  name: 'LegalPlanning',
  component: LegalPlanning,
  meta: {
    background: 'flex bg-orange-soft'
  }
},
{
  path: '/tax-plannings',
  name: 'TaxPlanning',
  component: TaxPlanning,
  meta: {
    background: 'flex bg-purple-light'
  }
},
{
  path: '/goals',
  name: 'Goal',
  component: Goal,
  meta: {
    background: 'flex bg-earth-light'
  }
},
{
  path: '/learn',
  name: 'Learn',
  component: Learn,
},
{
  path: '/market',
  name: 'Market',
  component: Market,
},
{
  path: '/settings',
  // name: 'Settings',
  component: Settings,
  children: [{
    path: '/',
    component: ProfileSettings,
    meta: { title: 'Settings' },
  },
  {
    path: '/settings/input',
    component: InputSettings
  },
  {
    path: '/settings/display',
    component: DisplaySettings
  },
  {
    path: '/settings/security',
    component: SecuritySettings
  }
  ]
},
{
  path: '/help',
  name: 'Help',
  component: Help,
},

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta && to.meta.title ? "Greenstar |" + " " + to.meta.title : 'Greenstar';

  next();
})

export default router