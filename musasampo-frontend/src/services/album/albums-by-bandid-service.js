//fetch bands from backend
export default async function fetchAlbumsByBandId(albumId)
{
    //fetch for checkuser2 and get a response
    const albumsResponse = await fetch('http://localhost:9000/albums/' + albumId);
    //get the status response
    const data = albumsResponse;

    //alert(data);

    if (data === 404 || data === 400 || data === 500)
    {
       alert("Error");
    }
    else
    {
        return data;  
    }
};