import { FC } from 'react';
import styles from './MainScreen.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from 'types/categories';

interface ICardProps {
  cat: Category;
}
const CardCategory: FC<ICardProps> = (props) => {
  const { cat } = props;

  return (
    <Link className={styles.card} href={`/catalog/${cat.slug}`}>
      <span className={styles.cardTitle}>{cat.title}</span>

      {cat.imgUrl && (
        <Image
          className={styles.cardImage}
          src={`http://localhost:3000/${cat.imgUrl}`}
          alt={cat.title}
          width={95}
          height={95}
        />
      )}
    </Link>
  );
};

export default CardCategory;
