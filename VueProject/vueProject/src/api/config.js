import axios from 'axios'
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 封装axios
const $axios = (url, method = 'get', params) => {
    return new Promise((resolve, reject) => {
        axios({url, method: method, params}).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        }).catch((error) => {
            reject(error)
        })
    })
};

export default $axios;






