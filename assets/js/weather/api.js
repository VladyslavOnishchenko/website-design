export async function fetchData(url) {
    const response = await fetch(url);
    return await response.json();
}

export function getDayText(isDay) {
    return isDay === 1 ? "Day" : "Night";
}