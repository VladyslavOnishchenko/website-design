const urlBase = "http://194.61.53.73/api"


export async function getRequest(uri = '', method = 'GET', options) {

    try {
        return await fetch(`${urlBase}${uri}`, {
            method,
        }).then((res) => res.json());

    } catch (error) {
        console.error(`Error api fetch data: ${error}`);
    }

}