
export enum moh_source {
    cases_malaysia_data = "https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/epidemic/cases_malaysia.csv",
    deaths_malaysia_data = "https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/epidemic/deaths_malaysia.csv"
}

export async function getapi(source: string) {
    // const response = await fetch(moh_source.cases_malaysia_data)
    // console.log(response.text())

    fetch(source)
    .then(async (response)=>{
        let rows= await response.text()
    })
    .then((rows)=>{
        return rows
    })
}
