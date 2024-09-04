import clsx from 'clsx';
import Link from 'next/link';

const StoreCard = ({ id, name, description, categories, image, color, url, className }) => {
  return (
    <Link 
    className={clsx(className,`max-w-sm overflow-hidden cursor-pointer`)}
    href={`/store/${id}`}>
      <div className="flex flex-col justify-center">
        <img className="w-full h-[305px] object-cover rounded-xl" src={image} alt={name} />
        <div className="py-2">
          <div className="font-bold text-left text-xl">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-2 pb-2">
          {categories?.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{category}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
