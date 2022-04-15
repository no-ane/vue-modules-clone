export default [
  {
    path: '/',
    name: 'List',
    meta: { module: 'page' },
    component: () => import('@views/demo/list'),
  },
  {
    path: '/item',
    name: 'item',
    meta: { module: 'Mother' },
    component: () => import('@views/demo/item'),
  },
  {
    path: '/other',
    name: 'other',
    meta: { module: 'Mother' },
    component: () => import('@views/demo/other'),
  },
];
