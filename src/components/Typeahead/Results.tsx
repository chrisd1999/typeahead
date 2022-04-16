import clsx from "utils/clsx";
import { getImageUrl, IFlickrPhoto } from "../../utils/flickr";

interface Props {
  results: IFlickrPhoto[];
  className?: string;
}

const Results = ({ results, className = "" }: Props) => {
  return (
    <div
      className={clsx({
        "flex flex-wrap justify-center": true,
        [className]: !!className,
      })}
    >
      {results.map((image) => (
        <div
          key={image.id}
          className="group relative cursor-pointer rounded-md select-none"
        >
          <img
            className="p-0.5 rounded-md relative"
            src={getImageUrl(image)}
            width="100"
            height="100"
            loading="eager"
          />
          <div className="absolute p-0.5 inset-0 hidden opacity-[0.3] border-2 border-transparent bg-gray-700 group-hover:block rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default Results;
