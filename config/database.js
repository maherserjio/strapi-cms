const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
    const { host, port, database, user, password } = parse(env("DATABASE_URL"));

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


