import { Category } from '@/controllers/types';
import Icon from './icon';

type CategoryItemProps = {
  category: Category;
};

function CategoryItem(props: CategoryItemProps) {
  const { category } = props;
  const { name } = category;
  return (
    <div className="mb-[8px] flex items-center justify-between rounded-lg bg-white p-[24px]">
      <p>{name}</p>
      <button className="secondary-icon-button">
        <Icon name="arrow_forward" />
      </button>
    </div>
  );
}

export default CategoryItem;
