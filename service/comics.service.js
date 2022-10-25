require('dotenv').config({  path: "./config/config.env"});
const needle = require('needle');
const md5 = require('md5');

// Env variables
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_PUBLIC_KEY_VALUE = process.env.API_PUBLIC_KEY_VALUE;
const API_HASH_NAME = process.env.API_HASH_NAME;
const API_TIMESTAMP_NAME = process.env.TIMESTAMP_NAME;
const API_TIMESTAMP_VALUE = process.env.TIMESTAMP_VALUE;
const API_PRIVATE_KEY_VALUE = process.env.API_PRIVATE_KEY_VALUE;
const hashedKey = md5(API_TIMESTAMP_VALUE + API_PRIVATE_KEY_VALUE + API_PUBLIC_KEY_VALUE);

const GetAllComics = async () => {    
    try{
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_PUBLIC_KEY_VALUE,
            [API_TIMESTAMP_NAME]: API_TIMESTAMP_VALUE,
            [API_HASH_NAME]: hashedKey
        });
        const apiResponse = await needle('get',`${API_BASE_URL}?${params}`);
        const data = apiResponse.body;

        return data;
    }catch(error){
      console.log(`Could not fetch comics data ${error}`)
    }
};

module.exports = {GetAllComics }