import Link from "next/link";
import classes from "./page.module.css";
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals ,created{" "}
          <span className={classes.highlight}> by you </span>
        </h1>
        <p>
          {" "}
          choose your favourite recipe and cook it yourself. It is easy and
          simple{" "}
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite receipe</Link>
        </p>
      </header>

      <main className={classes.main}></main>
    </>
  );
}
