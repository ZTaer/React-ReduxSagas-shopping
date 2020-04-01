// createGlobalStyle: 创建作用于全局的css( 完成笔记 )
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
		padding: 20px 40px;
		@media(max-width: 800px) {
			padding: 10px;
		}
	}
	a {
		text-decoration: none;
		color: black;
	}
	* {
		box-sizing: border-box;
	}
`;