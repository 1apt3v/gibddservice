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

export const getDataDriverLicensesFromDB = async () => {
    return await fetch(`http://localhost:8080/api/driverLicenses`)
        .then((response) => response.json())
        .then((data) => data)
        .catch(err => {
            console.error(err)
            return { message: '404' }
        })
}

export const deleteDataDriverFromDB = async (id) => {
    return await fetch(`http://localhost:8080/api/driver/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => {
            console.error(err)
            return { message: err }
        })
}

export const createDataDriverToDB = async (driver) => {
    return await fetch(`http://localhost:8080/api/driver`, {
        method: 'POST',
        body: JSON.stringify(driver),
        headers: { "Content-Type": "application/json" }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.error(err)
            return { message: err }
        })
}

export const _testTransactionInDB = async (data) => {
    return await fetch(`http://localhost:8080/api/test`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.error(err)
            return { message: err }
        })
}