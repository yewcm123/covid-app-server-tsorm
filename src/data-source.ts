import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const CovidDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "covid_db",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
