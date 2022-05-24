
let host = process.env.DB_HOST;
let username = process.env.DB_USER;
let password = process.env.DB_PASS;
let database = process.env.DB_NAME;
let synchronize = false;


if (process.env.NODE_ENV === "development") {
   host = "localhost";
   username = "postgres";
   password = "1234";
   database = "cotg";
   synchronize = true;
}
if (process.env.NODE_ENV === "prod") {
   synchronize = false;
}

module.exports = {
   "type": "postgres",
   "host": host,
   "port": 5432,
   "username": username,
   "password": password,
   "database": database,
   "synchronize": synchronize,
   "entities": [
      "src/models/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
