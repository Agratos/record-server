import { DataSource } from 'typeorm';
import { DATA_SOURCE } from './database.constants';

export const mysqlDatabaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
