'use client';

import { Category } from '@/controllers/types';
import Icon from './icon';
import { useState } from 'react';

type CategoryItemProps = {
  category: Category;
};

function CategoryItem(props: CategoryItemProps) {
  const { category } = props;
  const { name, activities } = category;

  const [showActivities, setShowActivities] = useState(false);

  const handleShowActivities = () => {
    setShowActivities(!showActivities);
  };

  return (
    <>
      <div
        className="mb-[8px] flex cursor-pointer items-center justify-between rounded-lg bg-white p-[24px]"
        onClick={handleShowActivities}
      >
        <p>{name}</p>
        <button
          className={`
          secondary-icon-button transition-all duration-300 ease-in-out
          ${showActivities ? 'rotate-90' : 'rotate-0'}
          `}
        >
          <Icon name="arrow_forward" />
        </button>
      </div>
      <div
        className={`
        -mt-[16px] mb-[8px] flex items-center justify-between rounded-lg border-t-2 border-light bg-white p-[24px]
        transition-all duration-300 ease-in-out
        ${!showActivities ? 'hidden h-0' : 'block h-auto'}
        `}
      >
        <ul>
          {activities.map((activity, idx) => (
            <li key={idx + 1 + 'activity-item'}>{activity.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CategoryItem;
