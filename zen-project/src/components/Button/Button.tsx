import './Button.css';

const Button = (props: { category: string; limit?: number }) => {
  const { category, limit } = props;
  const upperCaseCategory = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <button onClick={() => console.log("Category: ", category, "Limit: ", limit)}>{upperCaseCategory}</button>
  );
};

export default Button;
