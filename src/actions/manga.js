export const getManga = async () => {
    return fetch('/mangas.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
}
