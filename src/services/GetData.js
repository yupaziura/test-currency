    import { useState } from "react";
    
    export const useFetchData = () => {
        const [loading, setLoading] = useState('false');

        const myHeaders = new Headers();
        const apiKey = process.env.REACT_APP_API_KEY.replace(/['";]+/g, '');;
        myHeaders.append("apikey", apiKey);

        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };


        const request = async () => {
            setLoading(true);
            try{
                const req = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=EUR%2CUSD&base_currency=UAH`, requestOptions);
                const response = await req.text();

                const result = await JSON.parse(response);
                setLoading(false);
                return result.data
            }
            catch(e){
                setLoading(false);
                console.log(e)
            }
        }

        return {request, loading};

    }    