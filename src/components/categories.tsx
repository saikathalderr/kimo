import { Category } from '@/controllers/types';
import CategoryItem from './categoryItem';

type CategoriesProps = {
  categories: Category[];
};

function Categories(props: CategoriesProps) {
  const { categories } = props;
  return (
    <div className="py-10">
      <p className="py-5 pt-0 font-bold text-dark">Categories</p>
      <div>
        {categories.map((category, idx) => (
          <CategoryItem key={idx + 1 + 'category-item'} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
