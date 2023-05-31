import { QuoteType } from '../../utils/types';

export const Quote: React.FC<QuoteType> = ({ author, category, quote }) => {
  // Makes first letter a capital letter
  const upperCaseCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div>
      <h3 className="quote">"{quote}"</h3>
      <div>
        <h4>– {author}</h4>
      </div>
      <div>
        <h4>Category: {upperCaseCategory}</h4>
      </div>
    </div>
  );
};
