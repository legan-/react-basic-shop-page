import expect from 'expect';

import parseReceivedData from './parseReceivedData';

describe('parseReceivedData', () => {  
  it('should transform an array to an object', () => {
    const data = [
      {
        id: 1,
        title: 'Title 1',
        img: 'Image 1',
        price: 99,
        brand: 'Brand 1',
        size: 'Size 1',
        sold: true,
      },
      {
        id: 2,
        title: 'Title 2',
        img: 'Image 2',
        price: 219,
        brand: 'Brand 2',
        size: 'Size 2',
        sold: false,
      },
      {
        id: 3,
        title: 'Title 3',
        img: 'Image 3',
        price: 300,
        brand: 'Brand 3',
        size: 'Size 3',
        sold: false,
      }
    ];

    const expected = {
      ['1']: {
        id: '1',
        title: 'Title 1',
        img: 'Image 1',
        price: 99,
        brand: 'Brand 1',
        size: 'Size 1',
        sold: true,
      },
      ['2']: {
        id: '2',
        title: 'Title 2',
        img: 'Image 2',
        price: 219,
        brand: 'Brand 2',
        size: 'Size 2',
        sold: false,
      },
      ['3']: {
        id: '3',
        title: 'Title 3',
        img: 'Image 3',
        price: 300,
        brand: 'Brand 3',
        size: 'Size 3',
        sold: false,
      }
    };

    parseReceivedData(data).then(response => {
      expect(response).toEqual(expected);
    });
  });
});
