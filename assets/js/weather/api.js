export async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export function getDayText(isDay) {
    return isDay === 1 ? "Day" : "Night";
}