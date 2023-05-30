import { createGlobalStyle } from 'styled-components';

import EpilogueItalicWoff from './Epilogue-Italic-VariableFont_wght.woff';
import EpilogueItalicWoff2 from './Epilogue-Italic-VariableFont_wght.woff2';

import EpilogueVariableWoff from './Epilogue-VariableFont_wght.woff';
import EpilogueVariableWoff2 from './Epilogue-VariableFont_wght.woff2';

import CherryBombWoff from './CherryBombOne-Regular.woff';
import CherryBombWoff2 from './CherryBombOne-Regular.woff2';

import ArvoWoff from './Arvo-Bold,Arvo-BoldItalic,Arvo-Italic/Arvo-Bold.woff';
import ArvoWoff2 from './Arvo-Bold,Arvo-BoldItalic,Arvo-Italic/Arvo-Bold.woff2';

const Globalstyle = createGlobalStyle`
    @font-face {
        font-family: 'EpilogueItalic';
        src:
        url(${EpilogueItalicWoff2}) format('woff2'),
        url(${EpilogueItalicWoff}) format('woff');
        font-weight: 300;
        font-style: italic;
    }
    @font-face {
        font-family: 'Epilogue';
        src:
        url(${EpilogueVariableWoff2}) format('woff2'),
        url(${EpilogueVariableWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Arvo';
        src:
        url(${ArvoWoff2}) format('woff2'),
        url(${ArvoWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;

export default Globalstyle;
