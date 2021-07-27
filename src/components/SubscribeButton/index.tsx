import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const handleClick = () => {
    console.log(priceId);
  };

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleClick}
    >
      Subscribe now
    </button>
  );
}
