import styled,{css} from 'styled-components';

// 1-0
export const display_flex = ( direction = 'row' ) => {
    return css`
        display:flex ;
        display:-webkit-flex ;
        flex-direction:${direction}  !important;
	    -webkit-flex-direction:${direction} !important;
    `;
}

// 1-1
export const xy_items = ( x, y, nowrap = 'nowrap' ) => {
    return css`
        justify-content:${x} !important;
		-webkit-justify-content:${x} !important;
		
		align-items:${y} !important;
		-webkit-align-items:${y} !important;
		
		flex-wrap:${nowrap} !important;
		-webkit-flex-wrap:${nowrap} !important;
    `;
}

// 1-2
export const xy_content = ( x, y, wrap = 'wrap' ) => {
    return css`
        justify-content:${x} !important;
		-webkit-justify-content:${x} !important;
		
		align-content:${y} !important;
		-webkit-align-content:${y} !important;
		
		flex-wrap:${wrap} !important;
		-webkit-flex-wrap:${wrap} !important;
    `;
} 

// 5-0
export const img_transition = ( times ) => {
    return css`
        transition:all ${times} linear;
		-moz-transition: all ${times} linear;
		-webkit-transition: all ${times} linear;
    `;
} 

export const img_transition_scale = ( size ) => {
    return css`
		-webkit-transform: scale(${size},${size});
		-moz-transform: scale(${size},${size});
		transform: scale(${size},${size});
    `;
} 