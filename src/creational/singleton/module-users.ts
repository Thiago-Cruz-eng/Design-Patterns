import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ user: 'thiago', age: 21 });
myDatabaseClassic.add({ user: 'maria', age: 7 });
myDatabaseClassic.show();
myDatabaseClassic.remove(0);
console.log('');
myDatabaseClassic.show();
