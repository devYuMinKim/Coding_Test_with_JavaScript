/**
 * @param cars {array}
 * @param clients {array}
 * @return int
 */
function solution(cars, clients) {
    const x = 0
    const y = 1

    clients = clients.sort((a, b) => a[y] - b[y])
    cars = cars.sort((a, b) => a[x] - b[x])

    let sells = cars.reduce((total, car) => {
        for (let i = 0; i < clients.length; i++){
            const client = clients[i]
            if (client[y] >= car[y] && client[x] < car[x]) {
                clients.splice(i, 1)
                return total + 1
            }    
        }
        return total
    }, 0)

    return sells
}
