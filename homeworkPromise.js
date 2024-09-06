const makeAllCaps = (inputUser) => {
    return new Promise((resolve, reject) => {
        const validateType = inputUser.every(el => typeof el === "string")
        if (validateType) {
            const result = inputUser.map(el => {
                return el.toUpperCase()
            })
            resolve(result)
        } else {
            reject(" input is wrong type")
        }
    })
}

const sortWords = (inputData) => {
    return new Promise((resolve, reject) => {
        const result = inputData.sort()
        if (result) {
            resolve(result)
        } else {
            reject("Error gabisa sort")
        }
    })
}

const arrayOfWords = ['cucumber', 'tomatos', 'avocado']

const complicatedArray = ['cucumber', 44, true]

makeAllCaps(arrayOfWords).then(sortWords).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})

makeAllCaps(complicatedArray).then(sortWords).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})