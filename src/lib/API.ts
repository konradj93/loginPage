import axios from 'axios';
import { LoginInterface } from '../interfaces/interfaces';

const logIn = (data: LoginInterface): Promise<any> => {
    return axios({
        method: 'POST',
        url: `https://run.mocky.io/v3/1f6e033b-72ea-48e8-ad93-be5d356f7e44`,
        data: {
            ...data
        }
    })
};

export default logIn;