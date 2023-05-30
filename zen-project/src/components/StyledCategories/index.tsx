import styled from "styled-components";
import { CategoryButtonProps } from "../../utils/types";
import { Children } from "react";


const StyledCategories = styled.section`

    position: relative;
    margin-bottom: 1rem;
    grid-template-columns: repeat(6, 1fr);
    display: grid;

`;

// const CategorySection: React.FC<CategoryButtonProps> = ({
//     visible,
// }) => {
//     return (
//         <StyledCategories
//         isVisible = {visible}>
//         </StyledCategories>
//     );
// }

export default StyledCategories;