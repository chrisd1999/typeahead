const FLICKR_API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${import.meta.env.VITE_FLICKR_API_KEY}
&format=json&nojsoncallback=1&per_page=30`;

export interface IFlickrPhoto {
  id: string,
  farm: number,
  isfamily: number,
  isfriend: number,
  ispublic: number,
  owner: string,
  server: string,
  secret: string,
  title: string,
}

export const searchImages = async (searchTerm: string, page = 1): Promise<IFlickrPhoto[]> => {
  const response = await fetch(`${FLICKR_API_URL}&tags=${searchTerm}&page=${page}`);
  const result = await response.json();

  return result.photos?.photo ?? [];
};

interface IImageOptions {
  id: string,
  farm: number,
  server: string,
  secret: string,
}

export const getImageUrl = ({ id, farm, server, secret }: IImageOptions): string => (
  `https://farm${farm}.static.flickr.com/${server}/${id}_${secret}_s.jpg`
);
