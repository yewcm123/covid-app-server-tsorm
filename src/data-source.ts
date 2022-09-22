import { Cases_malaysia } from './entities/Cases_malaysia';
import "reflect-metadata"
import { DataSource } from "typeorm"


export const CovidDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "covid_db",
    synchronize: true,
    logging: false,
    entities: [Cases_malaysia],
    migrations: [],
    subscribers: [],
})
