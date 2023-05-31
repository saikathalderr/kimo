import Icon from './icon';

function CatergoryItem() {
  return (
    <div className="mb-[8px] flex items-center justify-between rounded-md bg-white p-[24px]">
      <p>Category Name</p>
      <button className="secondary-icon-button">
        <Icon name="arrow_forward" />
      </button>
    </div>
  );
}

export default CatergoryItem;
