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
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './User/Login',
        },
        {
          path: '/user',
          redirect: '/user/login',
        },
       
      ],
    },

    {
      name: '个人中心',
      path: '/user/profile',
      component: './User/PersonalCenter',
      hideInMenu: true,
      icon: 'user',
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