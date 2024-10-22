const ChangeView = ({
    setView,
    typeView,
  }: {
    setView: (view: string) => void;
    typeView: string;
  }) => {

    const handleClick = () => {
      if (typeView === 'map') {
        setView('list');
      } else {
        setView('map');
      }
    };
  
    return (
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          className="px-4 py-2 bg-black text-white rounded-full min-w-[155px]"
          onClick={handleClick}
        >
          {typeView === 'map' ? 'Mostrar en lista' : 'Mostar en mapa'}
        </button>
      </div>
    );
  };
  
  export default ChangeView;
  