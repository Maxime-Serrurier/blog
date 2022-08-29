import axios from "axios";

const instance = axios.create({
    baseURL: 'https://blog-react-a39bf-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;