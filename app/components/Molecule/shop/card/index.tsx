import clsx from 'clsx';
import Link from 'next/link';

const StoreCard = ({
  id,
  name,
  description,
  categories,
  image,
  color,
  url,
  className,
  setHoveredMarker
}) => {

  return (
    <Link
      className={clsx(className, `max-w-sm overflow-hidden cursor-pointer`)}
      href={`/store/${id}`}
      onMouseOver={() => setHoveredMarker({
        id,
        name,
        description,
        store_categories: categories,
        imgUrl: image
      })}
      onMouseOut={() => setHoveredMarker(null)}
    >
      <div className="flex flex-col justify-center">
        <img className="w-full h-[305px] object-cover rounded-xl" src={image} alt={name} />
        <div className="py-2">
          <div className="font-bold text-left text-xl">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="pt-2 pb-2 flex flex-wrap h-auto">
          {categories?.data?.map((category, index) => (
            <span
              key={index}
              className="flex-shrink-0 bg-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-700 mr-2 mb-2 whitespace-nowrap"
            >
              #{category.attributes.Name}
            </span>
          ))}      
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
