import { Server, Model } from 'miragejs';

// eslint-disable-next-line import/prefer-default-export
export const makeServer = ({ environment = 'development' } = {}) => {
  const server = new Server({
    environment,

    models: {
      user: Model,
    },

    // eslint-disable-next-line no-shadow
    seeds(server) {
      server.create('user', {
        id: '1',
        email: 'test1@gmail.com',
        name: 'Василий',
        surname: 'Петров',
        birthday: '02/01/2000',
        gender: 'Мужской',
        deliveryAddress: 'Какой-то город Х улица Y',
        phone: '88005553535',
        status: false,
        password: 'qwerty123',
      });
      server.create('user', {
        id: '2',
        email: 'test2@gmail.com',
        name: 'Петр',
        surname: 'Смирнов',
        birthday: '02/01/2000',
        gender: 'Мужской',
        deliveryAddress: 'Какой-то город Х улица Y',
        phone: '88888888888',
        status: false,
        password: 'qwerty123',
      });
      server.create('user', {
        id: '3',
        email: 'test3@gmail.com',
        name: 'Алексей',
        surname: 'Васильев',
        birthday: '02/01/2000',
        gender: 'Мужской',
        deliveryAddress: 'Какой-то город Х улица Y',
        phone: '88888888888',
        status: false,
        password: 'qwerty123',
      });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;
      this.get('/users', schema => schema.users.all());
    },
  });

  return server;
};
