    async function fetchData(curr) {
        const myHeaders = new Headers();
        myHeaders.append("apikey", "EBUR1veCFtuzBmjY5MMujiIAIY90oaRM");

        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

            
        return  await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=UAH&from=${curr}&amount=1`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    const res = JSON.parse(result);
                    const curr = Math.round(res.result * 100) / 100;
                return curr})
    }    


export default fetchData;