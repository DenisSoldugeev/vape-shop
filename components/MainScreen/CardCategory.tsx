import { FC } from 'react';
import styles from './MainScreen.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface ICardProps {
  cat: {
    id: number;
    title: string;
    imageUrl: string;
  };
}
const CardCategory: FC<ICardProps> = (props) => {
  const { cat } = props;

  return (
    <Link className={styles.card} href='#'>
      <span className={styles.cardTitle}>{cat.title}</span>
      <Image
        className={styles.cardImage}
        src={cat.imageUrl}
        alt={cat.title}
        width={95}
        height={95}
      />
    </Link>
  );
};

export default CardCategory;
