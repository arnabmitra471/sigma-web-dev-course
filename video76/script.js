// function to fetch data from the server
async function getData() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500)
    })
}


async function main() {
    console.log("Loading Modules...")
    console.log("Do Something else")

    console.log("Load data")
    let data = await getData();

    console.log(data)
    console.log("process data")

}
main()


// data.then(()=>{
//     console.log(data)
//     console.log("process data")
// })