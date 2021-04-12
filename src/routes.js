import React from 'react';

const Users = React.lazy(() => import('./views/users/Users'));
const UserRegister = React.lazy(() => import('./views/users/Register'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/register', name: 'Create User', component: UserRegister },
  
];

export default routes;
