
const sendRequest = async (requestObj) => {
    const { url, method, request } = requestObj;
    const requestResponse = {
        data: '',
        error: ''
    };

    try {
        let response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(request)
        });
        let data = await response.json();
        const { error } = data ;
        error ? requestResponse.error = error : requestResponse.data = data;
    } catch (error) {
        console.log(error)
        requestResponse.error = error;
    }
    return requestResponse;
};

const Request = { sendRequest }

export default Request;