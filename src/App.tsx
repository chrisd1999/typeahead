import Typeahead from "@components/Typeahead";

function App() {
  return (
    <div className="App">
      <div className="container max-w-7xl mx-auto pt-4">
        <h1 className="font-poppins text-bold text-2xl text-center pb-2">
          Search your favorite Flickr images
        </h1>
        <Typeahead />
      </div>
    </div>
  );
}

export default App;
