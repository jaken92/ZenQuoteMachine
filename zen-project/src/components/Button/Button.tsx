import { FetchQuotes } from '../../utils/queries';

const Button = (category: string, limit?: number) => {
  return <button onClick={() => FetchQuotes(category, limit?)}>{category}</button>;
};

export default Button;
