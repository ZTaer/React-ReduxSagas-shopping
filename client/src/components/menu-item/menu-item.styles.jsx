import styled,{css} from 'styled-components';
export const MenuItemStyledContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    // &.xxx相当于 .menu-item.xxx
    &.large{
        height:380px;
    }
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }
    
    &:hover {
        cursor: pointer;

        // CSS-使标签缓缓变大( 完成笔记 )
        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        
        & .content {
            opacity: 0.9;
        }
    }
`;
MenuItemStyledContainer.displayName = "MenuItemStyledContainer";
const backgroundImg = props => {
    if( props.backgroundImage ){
        return css`
            background-image: url(${ props.backgroundImage });
        `;
    }
}

export const BackgroundImage = styled.div`
    width:100%;
    height:100%;
    background: no-repeat;
    background-size:cover;
    background-position:center;
    ${ backgroundImg }
`;
BackgroundImage.displayName = "BackgroundImage";

export const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    position: absolute;
    background-color:#ddd ;
    opacity: 0.9;
`;
Content.displayName = "Content";

export const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;
Title.displayName = "Title";

export const Subtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;
Subtitle.displayName = "Subtitle";