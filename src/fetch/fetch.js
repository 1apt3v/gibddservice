import { setDriverValue } from "../redux/driverReducer"


export const getDataDriverFromDB = async (id) => {
    return await fetch(`http://localhost:3001/driver/${id}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch(err => {
            console.error(err)
            return { message: 'not found' }
        })
}
