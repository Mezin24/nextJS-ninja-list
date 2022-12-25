import Link from 'next/link';
import classes from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <h1 className={classes.title}>Homepage</h1>
      <p className={classes.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        adipisci officia hic, debitis recusandae similique id reiciendis dolorem
        quae temporibus.
      </p>
      <p className={classes.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        adipisci officia hic, debitis recusandae similique id reiciendis dolorem
        quae temporibus.
      </p>
      <Link href='/ninjas' className={classes.btn}>
        See Ninja Listing
      </Link>
    </>
  );
}
