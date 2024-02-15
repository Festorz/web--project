import Image from "next/image";
import r_back from "../public/images/return.svg";
import star from "../public/images/star.svg";
import styles from "../src/styles/Collection.module.css";

const CollectionItem = ({ collection }) => {
  return (
    <div className={styles.collectionItem}>
      <figure>
        <img src={collection.publication.media[0].uri} alt="" />
        <figcaption>
          {collection.publication.tagsOnDesc.length > 0 ? (
            <>
              <Image src={r_back} alt="icon" />
              {collection.publication.tagsOnDesc[0]}
            </>
          ) : (
            ""
          )}
        </figcaption>
      </figure>

      <div className={styles.description}>
        {collection.publication.productName}
      </div>

      <p className={styles.price}>
        <span>
          {collection.publication.priceInfo.discountRate
            ? `${collection.publication.priceInfo.discountRate}%`
            : ""}
        </span>
        {collection.publication.priceInfo.price}
      </p>
      {collection.publication.tagsOnImage.length > 0 ? (
        <p className={styles.brand}>{collection.publication.tagsOnImage[0]}</p>
      ) : (
        ""
      )}

      <div className={styles.ratings}>
        <Image className="star" src={star} alt="star" />
        {collection.publication.rating}
      </div>
      {collection.publication.prefaceIconUrl ? (
        <div className={styles.delivery}>
          <img src={collection.publication.prefaceIconUrl} alt="" />
          {collection.publication.preface}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CollectionItem;
