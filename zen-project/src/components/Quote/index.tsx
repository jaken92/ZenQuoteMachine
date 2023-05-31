import { QuoteType } from '../../utils/types';

export const Quote: React.FC<QuoteType> = ({ author, category, quote }) => {
  const upperCaseCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div className="quote-wrapper">
      <h3 className="quote">"{quote}"</h3>
      <div>
        <h4>Author: </h4>
        <span>{author}</span>
      </div>
      <div>
        <h4>Category: </h4>
        <span>{upperCaseCategory}</span>
      </div>
    </div>
  );
};
