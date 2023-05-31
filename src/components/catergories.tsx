import CatergoryItem from './catergoryItem';

function Catergories() {
  return (
    <div className="w-[100%] py-10 lg:w-[50%]">
      <p className="py-5 pt-0 font-bold text-dark">Catergories</p>
      <div>
        <CatergoryItem />
        <CatergoryItem />
        <CatergoryItem />
        <CatergoryItem />
        <CatergoryItem />
      </div>
    </div>
  );
}

export default Catergories;
