const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/base',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'List',
        to: '/users',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create',
        to: '/users/register',
      },
      
    ],
  },
  
]

export default _nav
