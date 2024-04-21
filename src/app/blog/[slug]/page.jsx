import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
          <Image
            className={styles.avatar}
            src="/post.jpg"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailsTitle}>Author</span>
            <span className={styles.detailsText}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailsTitle}>Published</span>
            <span className={styles.detailsValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          nihil perferendis voluptate error illo? Animi repellendus quas
          voluptatem, cumque illum ipsum quam, sit consequatur incidunt
          recusandae officiis, quod alias quibusdam.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
