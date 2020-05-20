import styled,{css} from 'styled-components';
import { display_flex, xy_items, img_transition } from '../../assets/__OO7BTS.v1.0';


export const CollectionItemStyledContainer = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    height: 525px;
    margin-bottom:0.4rem;
    @media ( max-width:1500px ) {
        width: 19vw;
        height:400px;
    }
    align-items: center;

    ${ img_transition(0.3) }    
    &:hover{
        opacity: 0.8;

        .collection-item-btn{
        display: block;
        }
    }  
`;
CollectionItemStyledContainer.displayName = "CollectionItemStyledContainer";

// 设定背景图片
const getBackgroundImg = props => {
    if( props.backgroundImg ){
        return css`
            background-image: url( ${props.backgroundImg});
        `;
    }
}
getBackgroundImg.displayName = "getBackgroundImg";

export const Image = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    ${display_flex()}
    ${xy_items('center','flex-end')}
    ${getBackgroundImg}
`;
Image.displayName = "Image";

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

CollectionFooter.displayName = "CollectionFooter";

export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;
Name.displayName = "Name";

export const Price = styled.span`
    width: 10%;
`;
Price.displayName = "Price";