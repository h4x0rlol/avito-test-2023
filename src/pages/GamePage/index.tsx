import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import { gameIdSchema } from '../../utils';

export default function GamePage() {
  const { id } = useParams();

  const { success: isGameIdValid } = gameIdSchema.safeParse(id);

  if (!isGameIdValid) {
    return <NotFound />;
  }

  return <h1>Game page</h1>;
}
