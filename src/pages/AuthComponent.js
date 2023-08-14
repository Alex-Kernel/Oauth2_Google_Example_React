import axios from "axios";
import {useEffect} from "react";


const AuthComponent = () => {
    const requestJwtToken = () => {

        console.log("sending request")
        axios.get(`http://localhost:8080/login${window.location.search}`)
            .then(response => {console.log(response); sessionStorage.setItem("app_auth_token", response.data)})
            .then(() => document.location.href="/")
            .catch(error => console.log(error));
    }

    useEffect(() => {
        requestJwtToken();
    }, []);


    return null;
}

export default AuthComponent;