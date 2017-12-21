import axios from "axios";

let baseUrl = '';
export default {
    join = params => {
        return axios.get(`${baseUrl}/join`,'get',params)
    }
}