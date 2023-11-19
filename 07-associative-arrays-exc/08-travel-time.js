function travelTime(arr) {
    let destinations = {};


    for (let travelInfo of arr) {
        let [country, town, cost] = travelInfo.split(' > ');
        cost = Number(cost);

        if (country in destinations) {
            if (!destinations[country].hasOwnProperty(town)) {
                destinations[country][town] = cost;
            } else {
                if (destinations[country][town] > cost) {
                    destinations[country][town] = cost;
                }
            }
        } else {
            destinations[country] = { [town]: cost };
        }
    }
    let entries = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, towns] of entries) {
        let townsEntries = Object.entries(towns).sort((a, b) => a[1] - b[1]);

        let result = `${country} -> `;
        for (let [town, cost] of townsEntries) {
            result += `${town} -> ${cost} `;

        }
        console.log(result);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])