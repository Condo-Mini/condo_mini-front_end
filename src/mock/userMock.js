import mock from '../utils/mock';

mock.onPost('/api/home/login').reply((config)=>{
  const {email, password} = JSON.parse(config.data);
  if (email !== 'wesley@developer.com' || password !== 'admin') {
    return [400, { message: 'Seu email ou senha estão incorretos' }]
  }

  const user = {
    id: 1,
    'userName': 'WesleyAlmeida',
    'email': 'wesley@developer.com',
    'password': 'admin',
    'tipo': 'sudo',
  }

  return [200, { user }]
});