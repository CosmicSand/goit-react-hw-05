import css from "./ReviewCard.module.css";

export default function ReviewCard({ review, totalReviews, number }) {
  return (
    <div className={css.container}>
      <div className={css.author}>
        <p>{`${review.author} with ${
          review.author_details.rating !== null
            ? `rating ${review.author_details.rating}`
            : `no rating`
        }`}</p>
        <span>{`${number} / ${totalReviews}`}</span>
      </div>
      <div className={css.review}>{review.content}</div>
    </div>
  );
}
