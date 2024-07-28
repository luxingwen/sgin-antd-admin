export default [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },

    {
      name: '系统管理',
      path: '/system',
      icon: 'setting',
      routes: [
        {
          name: '菜单管理',
          path: '/system/menu',
          component: './Sys/Menu',
        },
        {
          name: '登录日志',
          path: '/system/loginlog',
          component: './Sys/LoginLog',
        },
        {
          name: '操作日志',
          path: '/system/oplog',
          component: './Sys/OpLog',
        },
        {
          name: 'API管理',
          path: '/system/api',
          component: './Sys/Api',
        },
      ],
    },
    {
      component: '404',
      path: '/*',
    },
  ];