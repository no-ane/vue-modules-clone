import Router from '@router';

export default {
  getRouteModule(route) {
    const { meta } = route || {};
    return meta.module || '';
  },
  getCurrentModule() {
    const current = Router.history.current;
    return this.getRouteModule(current);
  },
};
