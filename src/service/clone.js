import Router from '@router';
import modulesMethods from './methods';

class ModulesClone {
  _alreadyProxyRoute = false;
  _proxyRouteNameMap = {};

  async clone (setting) {
    const { target, module } = setting;
    const motherRoutes = Router.options.routes.filter(route => route.meta.module === target);
    const newRoutes = [];

    for (const route of motherRoutes) {
      // 复制后产生的新路由，路由的 module 参数还是保持不变
      // 新增了 cloneModule，表示“子模块”的code

      let index = route.path.indexOf('/:');
      if (index < 0) {
        index = route.path.length;
      }
      const realPath = route.path.substr(0, index);
      const newUrl = route.path.replace(realPath, realPath + '--clone--' + module);
      const newRoute = {
        ...route,
        path: newUrl,
        name: route.name + '--clone--' + module,
        meta: { ...route.meta, module: module }
      };

      if (!this._proxyRouteNameMap[module]) {
        this._proxyRouteNameMap[module] = {};
      }
      this._proxyRouteNameMap[module][route.name] = newRoute.name;
      newRoutes.push(newRoute);
    }

    Router.addRoutes(newRoutes);
    this.proxyRoute();
  }

  /**
   * @description: 代理路由
   * @return {*}
   */
  proxyRoute() {
    if (this._alreadyProxyRoute) {
      return;
    }
    this._alreadyProxyRoute = true;
    Router.beforeEach(async (routeTo, routeFrom, next) => {
      // 获取当前模块
      let moduleCode = modulesMethods.getRouteModule(routeFrom);
      moduleCode = routeTo.params.module || moduleCode;

      const map = moduleCode && this._proxyRouteNameMap[moduleCode];
      console.log('map', map);
      console.log('moduleCode', moduleCode);
      console.log('this._proxyRouteNameMap', this._proxyRouteNameMap);
      if (map && map[routeTo.name]) {
        console.log('map[routeTo.name]', map[routeTo.name]);
        const { params, query } = routeTo;
        next({ name: map[routeTo.name], params: params, query: query, replace: Router.isReplace });
      }

      next();
    });
  }

}

export default new ModulesClone();
