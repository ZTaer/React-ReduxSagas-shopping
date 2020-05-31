import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderDiv = styled.div`
    height: 70px;
    width: 95%;
    margin:0px auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    font-family: 'Open Sans Condensed';
`; 
HeaderDiv.displayName = "HeaderDiv";

// styled-components自定义标签赋予CSS( 完成笔记 )
    // 0. 先导入目标自定义标签,此时为Link标签
    // 1. 在使用styled( 目标标签 )
const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;
Link.displayName = "Link";

const OptionsDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
OptionsDiv.displayName = "OptionsDiv";

// styled-component使用css函数构建公共css3属性( 完成笔记 )
    // 0. 当前为构建公共css
const OptionContainerStyles = css`
    cursor: pointer;
    padding: 10px 15px;
`;
OptionContainerStyles.displayName = "OptionContainerStyles";
    // 1. 使用公共css
const OptionLink = styled(Link)`
    ${OptionContainerStyles} /* 引用公共css3 */
`;
OptionLink.displayName = "OptionLink";

export { HeaderDiv, LogoContainer, OptionsDiv, OptionLink };