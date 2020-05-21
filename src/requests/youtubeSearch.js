import { youtubeInstance } from './instances';
import decode from "unescape";

export async function searchByQuery(query, limit = null) {
    let params = {
        q: query,
        part: "snippet",
        maxResults: 30
    }
    limit && (params.limit = limit);
    const items = (await youtubeInstance.get('/search', { params: params })).data.items
    const formattedItems = items.filter((item)=>item.id.videoId)
                            .map((item)=>(
                                {   
                                    url: `https://youtube.com/watch?v=${item.id.videoId}`,
                                    title: decode(item.snippet.title),
                                    author: decode(item.snippet.channelTitle), 
                                    thumbnails: item.snippet.thumbnails,
                                    isSelected: false
                                }
                            ));
    return formattedItems;
}