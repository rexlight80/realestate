import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
         'X-RapidAPI-Key': '42974715aamsh07fe8dfa428ef31p1a9983jsn3f3cc5447c2c',
         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
     }
    })
    return data;

}