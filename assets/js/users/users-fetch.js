export async function fetchData(url, options) {
    try {
         return await fetch(url, options).then(res => res.json());
    } catch (err) {
        console.error(err);
    }
}