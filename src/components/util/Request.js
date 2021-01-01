
const sendRequest = async (requestObj) => {
    const { requestUrl } = requestObj;
    const requestResponse = {
        data: '',
        error: ''
    };

    try {
        let response = await fetch(requestUrl);
        let data = await response.json();
        requestResponse.data = data;
    } catch (error) {
        console.log(error)
        requestResponse.error = error;
    }
    return requestResponse;
}

const Request = { sendRequest }

export default Request;