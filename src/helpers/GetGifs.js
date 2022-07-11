export const getGifs = async(categoria)=> {
    let gifs = [];
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CfQVYMHBy392CdKXEUs2WRQWWpwR486c&q=${categoria}&limit=${20}`
    try {
      const respuesta = await fetch(url);
      const {data} = await respuesta.json();
        gifs = data.map(elemento=>({
        id: elemento.id,
        title:elemento.title,
        url: elemento.images.downsized_medium.url
      }));
    } catch (error) {
      gifs = [];
    }
    return gifs;
}