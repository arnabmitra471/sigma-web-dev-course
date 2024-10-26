"use server"
import fs from "fs/promises"
const submitAction = async (e) => {
    console.log(e)
    console.log(e.get("name"))
    console.log(e.get("add"))
    await fs.appendFile("arnab.txt", `The Name is ${e.get("name")} and the address is ${e.get("add")}\n`)
}
export { submitAction }