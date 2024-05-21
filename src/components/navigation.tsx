import { fetchNavigation } from '@/services/pages-service';
import { FC } from 'react';

export const Navigation: FC = async () => {
  const items = await fetchNavigation();

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <a href={`/${item.slug}`}>{item.menuName}</a>
        </li>
      ))}
    </ul>
  );
};
