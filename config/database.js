const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
    const { host, port, database, user, password } = parse(env("postgres://strapi_yuz8_user:CBpvlFEezALoOCf6SrxCWcYFFFY5oCU1@dpg-ci4ofatiuie263f8a720-a.oregon-postgres.render.com/strapi_yuz8"));

    return {
        connection: {
            client: 'postgres',
            connection: {
                host: 'dpg-ci4ofatiuie263f8a720-a',
                port: '5432',
                database: 'strapi_yuz8',
                user: 'strapi_yuz8_user',
                password: 'CBpvlFEezALoOCf6SrxCWcYFFFY5oCU1',
                ssl: { rejectUnauthorized: false },
            },
            debug: false,
        },
    }
};


