import styled,{css} from 'styled-components';

const sub_color = 'grey',main_color = 'black';

const shrinkLabel = css`
    top: -14px !important;
    font-size: 12px !important;
    color: ${main_color} !important;
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: ${sub_color};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      ${shrinkLabel};
    }
  }
`;

export const FromInputStyled = styled.input`
    background: none;
    background-color: white;
    color: ${sub_color};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${sub_color};
    margin: 25px 0;

    &:focus {
      outline: none;
    }
    
    /**
     * css: &:focus"~"选择表单时，指定class名做出改变( 完成笔记 )
     */
    &:focus ~ .form-input-label {
        ${shrinkLabel};
    }
`;
FromInputStyled.displayName = "FromInputStyled";

// 表单如果有数值则使用指定css
const inputLength = props => {
    if( props.inputLength ){
        return css`
            ${shrinkLabel} 
        `;
    }
}

export const FormInputLabel = styled.label`
    color: ${sub_color};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${inputLength};
`;
FormInputLabel.displayName = "FormInputLabel";