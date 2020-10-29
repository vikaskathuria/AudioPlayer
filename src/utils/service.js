import Config from "./Config";
import Axios from "axios";

export const ApiCall = async (apiname, Data) => {
    let URL = Config.Local + apiname;
    var authOptions = {
        method: 'POST',
        url: URL,
        data: Data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    console.log('authOptions ApiCall :-  ', authOptions)
    return Axios(authOptions)
        .then(response => {
            console.log("ApiCalling response ", apiname, " => ", response)
            if (response && response.data) {
                return response.data;
            }
        })
        .catch((error) => {
            console.log("error=======?", error.response)

            throw error

        });
}
