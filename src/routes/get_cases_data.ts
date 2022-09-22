import express from 'express'
import { Cases_malaysia } from 'src/entities/Cases_malaysia'
import { getapi, moh_source} from 'src/data-loader'

const router = express.Router();

router.get('/api/getCasesMalaysia', async (req, res) => {
    const {
        date,
        casesNew,
        casesRecovered
    } = req.body

    const caseList = Cases_malaysia.create({
        date,
        cases_new: casesNew,
        cases_recovered: casesRecovered
    })

    let dataRows = await getapi(moh_source.cases_malaysia_data)
    console.log(dataRows)
    //let dataArray = await dataRows.split("/n")
    
    await caseList.save()

})

export {router as getCasesData}