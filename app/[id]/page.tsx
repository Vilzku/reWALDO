import styles from "./styles.module.scss";
import WaldoImage from "@/components/WaldoImage";

export default async function Page({ params }: { params: { id: string } }) {
  const data: { answer: number[] } = JSON.parse(
    JSON.stringify(await import(`@/public/waldo-${params.id}/answer.json`))
  );

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>Select all images with</div>
        <h1>Waldo</h1>
      </header>
      <WaldoImage id={params.id} answer={data.answer} />
    </section>
  );
}
