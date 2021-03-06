import Bus from './util/bus'
import Components from './components/_index'
import Directives from './directives/_index'
import Init from './util/init'
import Load from './util/load'
import Toast from './functions/toast'

function plugin(Vue) {
  Object.keys(Directives).forEach(key => {
    Vue.directive(key, Directives[key])
  })
  
  Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key])
  })

  Vue.prototype.$vuetify = {
    bus: Bus,

    load: Load,

    init: Init,

    toast: Toast
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin