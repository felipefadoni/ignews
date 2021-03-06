import styles from './styles.module.scss';
import { useSession, signIn } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession();

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');
      return;
    }

    try {
      const response = await api.post('/checkout/create');
      const { sessionId } = response.data;
      const stripe = await getStripeJs();
      await stripe.redirectToCheckout({
        sessionId,
      });
    } catch (error) {
      alert('Erro ao criar um checkout');
      console.log(error.message);
    }
  };

  return (
    <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
      Subscribe now
    </button>
  );
}
