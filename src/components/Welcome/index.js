import { EmojiAngry } from 'react-bootstrap-icons';
import StatusCard from '../StatusCard';

const Welcome = () => {
  return (
    <StatusCard
      message='Nenhum usuário por aqui!'
      icon={<EmojiAngry />}
    />
  );
};

export default Welcome;
