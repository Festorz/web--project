import Collections from "../../components/Collections";
import Nav from "../../components/Nav";
import Shortcuts from "../../components/Shortcuts";
import Slider from "../../components/Slider";
import styles from "../styles/Layout.module.css";

export default function Home({ slides, shortcuts, collections }) {
  const excluded_itemIds = [2431, 2430, 2432, 2359];
  const items = collections.items.filter(
    (collection) =>
      collection.type === "SINGLE" &&
      collection.viewType === "TILE" &&
      excluded_itemIds.find((id) => id === collection.id) === undefined
  );

  return (
    <div>
      <Nav />
      <Slider slides={slides} />
      <div className={styles.container}>
        <main className={styles.main}>
          <Shortcuts shortcuts={shortcuts} />

          {items.map((collection, index) => (
            <Collections key={index} collections={collection} index={index} />
          ))}
        </main>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const slides_res = await fetch(`https://api.testvalley.kr/main-banner/all`);
    const shotcuts_res = await fetch(
      `https://api.testvalley.kr/main-shortcut/all`
    );

    const collections_res = await fetch(
      `https://api.testvalley.kr/collections?prearrangedDiscount`
    );

    const responses = await Promise.all([
      slides_res,
      shotcuts_res,
      collections_res,
    ]);

    const slides = await responses[0].json();
    const shortcuts = await responses[1].json();
    const collections = await responses[2].json();

    return {
      props: {
        slides,
        shortcuts,
        collections,
      },
    };
  } catch {
    console.error("Error fetching data:", error);

    // Return props with an empty object and notFound set to true
    return {
      props: {},
      notFound: true,
    };
  }
};
