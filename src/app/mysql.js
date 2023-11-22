import mysql from 'mysql';

const connect = mysql.createConnection({
    host: 'mysql',
    user: 'admin',
    password: 'admin',
    database: 'dev'
});

connect.connect((error) => {
    if (error) {
        console.log('Error while connecting to database: ' + error.stack);
        return;
    }
    console.log('Connected, thread id: ' + connect.threadId);
});

export default connect;