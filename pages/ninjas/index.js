import Link from 'next/link';
import styles from '../../styles/Ninja-list.module.css';
import { useRouter } from 'next/router';

const NinjasList = ({ ninjas }) => {
  const { pathname } = useRouter();

  return (
    <div>
      <h1 className={styles.title}>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link
          key={ninja.id}
          href={`${pathname}/${ninja.id}`}
          className={styles.single}
        >
          <h3>{ninja.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default NinjasList;

export const getStaticProps = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();

  return {
    props: {
      ninjas: data,
    },
  };
};
