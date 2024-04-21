import Image from "next/image";
import styles from "@/components/postCard/postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/post.jpg" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          adipisci modi ducimus iure, soluta dolores eius! Assumenda alias esse
          praesentium, quisquam atque accusantium? Et dolore, error quas fugit
          odit sapiente!
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default PostCard;
