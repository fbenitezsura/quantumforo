import clsx from 'clsx';

const StoreCard = ({ name, description, categories, image, color, url }) => {
  return (
    <div
    onClick={() => window.open(url, '_blank')}
    style={{ backgroundColor: color }}
    className={clsx(`col-span-12 md:col-span-4 max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer`)}>
      <img className="w-full h-[400px] object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-center text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-center text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
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
  );
};

export default StoreCard;
