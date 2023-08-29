import { useParams } from 'react-router-dom';
import { z } from 'zod';
import NotFound from '../NotFound';

export default function GamePage() {
  const { id } = useParams();

  const gameId = z.coerce.number().int().nonnegative().safeParse(id);

  if (!gameId.success) {
    return <NotFound />;
  }

  return <h1>Game page</h1>;
}
