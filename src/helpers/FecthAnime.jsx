
export const FecthAnime =async (anime='One Piece',cantidad=10) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(anime)}&limit=${encodeURI(cantidad)}&api_key=zFWOiBDfc8j7S11PnTcIcd5BMlobz38c`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const obj = data.map(r=>{
        return{
            id:r.id,
            titulo:r.title,
            tipo:r.type,
            usuario:r.username,
            imagen:r.images.downsized_medium.url,
        }
    })
    return obj;

}
