import image from './assets/image.jpg';
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks';

const text = `Lorem ipsum — классический текст -«рыба».Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н.э.на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку. <a href = "https://ru.wikipedia.org/" target = "_blank"> Википедия </a> `;

export const model = [
  new TitleBlock('Pure JavaScript constructor.', {
    tag: 'h3',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#FFFFFF',
      padding: '1.5rem',
      'text-align': 'center',
    }
  }),
  new TextBlock(text, {
    styles: {
      padding: '1rem',
      'font-weight': 'bold',
      'background': 'linear-gradient(to left, #f2994a, #f2c94c)',
    }
  }),
  new ColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'Как работают принципы SOLID и ООП в JavaScript максимально быстро',
    'JavaScript - очень крутой и интересный язык, который помогает создавать любой UI и не только!',
  ], {
    styles: {
      background: 'linear-gradient(to  bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#FFFFFF',
      'font-weight': 'bold',
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Это картинка',
  }),
];