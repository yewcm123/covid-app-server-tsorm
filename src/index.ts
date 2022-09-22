import express from 'express';
import { CovidDataSource } from "./data-source"
import { getapi, moh_source } from './data-loader';
import { getCasesData } from './routes/get_cases_data';


const app = express()

app.use(express.json())
app.use(getCasesData)
getapi(moh_source.cases_malaysia_data)

//console.log("loading");
CovidDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await CovidDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await CovidDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))


app.listen(8080, () => {
    console.log('Listening on port 8080')
})