export const getDataPenaltyFromDB = async (id) => {
    return await fetch(`http://localhost:8080/api/penalty?id=${id}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch(err => {
            console.error(err)
            return { message: '404' }
        })
}


export const getDataDriverFromDB = async (id) => {
    return await fetch(`http://localhost:8080/api/driver?id=${id}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch(err => {
            console.error(err)
            return { message: '404' }
        })
}
