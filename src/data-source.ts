import { deaths_malaysia } from './entity/deaths_malaysia';
import { cases_malaysia } from './entity/cases_malaysia';
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
    entities: [cases_malaysia, deaths_malaysia],
    migrations: [],
    subscribers: [],
})
