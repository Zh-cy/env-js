import Sequelize from 'sequelize';

const DB = new Sequelize("dev", "admin", "admin", {
    host: "mysql", // mysql is running in a docker container, so the hostname must be "mysql" not "localhost"
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    logging: console.log,
});

DB.authenticate().then(() => {
    console.log("connected!");
}).catch((err) => {
    console.log("connect failed: ", err);
});

export default DB;

// import mysql from 'mysql';
// const connect = mysql.createConnection({
//     host: 'mysql',
//     user: 'admin',
//     password: 'admin',
//     database: 'dev'
// });

// connect.connect((error) => {
//     if (error) {
//         console.log('Error while connecting to database: ' + error.stack);
//         return;
//     }
//     console.log('Connected, thread id: ' + connect.threadId);
// });

// export default connect;