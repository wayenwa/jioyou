export function PostData(type, userData){

    let BaseUrl = 'http://127.0.0.1:8000/api/';
    // const json = [];
    // json['json'] = JSON.stringify(userData);
    console.log(JSON.stringify(userData));
    return new Promise((resolve, reject) => {
        fetch(BaseUrl+type,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) =>{
            resolve(responseJson);
        })
        .catch((error) => {
            reject();
        })
    });
}