import React from "react";
import { searchImages, IFlickrPhoto } from "utils/flickr";
import useDebounce from "@utils/useDebounce";
import Results from "@components/Typeahead/Results";
import Loading from "@components/Loading";
import useFetch from "@utils/useFetch";

const Typeahead = () => {
  const [searchTerm, setSearchTerm] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);
  const debouncedTerm = useDebounce(searchTerm, 500);
  const { results, isLoading, fetch } = useFetch<IFlickrPhoto[]>();

  React.useEffect(() => {
    if (debouncedTerm === null) {
      return;
    }

    loadMoreImages(1);
  }, [debouncedTerm]);

  const loadMoreImages = (searchPage: number) => {
    fetch(searchImages(debouncedTerm!, searchPage));
  };

  return (
    <div>
      <input
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        value={searchTerm ?? ""}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for image"
        size={15}
      />
      <Results className="p-2" results={results} />
      {!results.length && !isLoading && (
        <div className="mx-auto text-center">
          {debouncedTerm
            ? "No images found for search term"
            : "Start by typing search term"}
        </div>
      )}
      {isLoading && <Loading className="mx-auto w-12 h-12" />}
      {!!results.length && !isLoading && (
        <button
          type="button"
          className="form-control font-normal text-gray-700 bg-gray-100 rounded-md px-2 py-1 float-right"
          onClick={() => {
            loadMoreImages(page + 1);
            setPage(page + 1);
          }}
        >
          Load more images
        </button>
      )}
    </div>
  );
};

export default Typeahead;
