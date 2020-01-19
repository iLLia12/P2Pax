export default function ({ $axios, redirect }, inject) {

    /*$axios.onRequest(config => {
        console.log('Making request...');
        console.log('url: ' + config.url);
        console.log('method: ' + config.method);
        console.log('auth._token.local: ' + config.headers.common['Authorization']);
        console.log("=================================================================================================")
    });

    $axios.onResponse(response => {
        console.log('Getting response: ');
        console.log('Status: '+ response.status);
        console.log('Data: ');
        console.log(response.data);
        console.log("=================================================================================================")
    });

    $axios.onRequestError(err => {
        console.log('Request error: ');
        console.log(err);
        console.log("=================================================================================================")
    });

    $axios.onResponseError(err => {
        console.log('Request error: ');
        console.log(err);
        console.log("=================================================================================================")
    });

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status);
        if (code === 400) {
            redirect('/400')
        }
    });*/
}

