export const initialData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'To do column',
          cardOrder: [
            'card-1',
            'card-2',
            'card-3',
            'card-4',
            'card-5',
            'card-6',
            'card-7'
          ],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 1',
              cover:
                'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/240608041_6709377809075899_4211581410010629493_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=54VUn5YahQEAX__gNqM&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT_lWFMwG0U4AEoesrrAj5l3w5gybcIDGzl5n8sH259fNA&oe=62C93E76'
            },
            {
              id: 'card-2',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 2',
              cover: null
            },
            {
              id: 'card-3',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 3',
              cover: null
            },
            {
              id: 'card-4',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 4',
              cover: null
            },
            {
              id: 'card-5',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 5',
              cover: null
            },
            {
              id: 'card-6',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 6',
              cover: null
            },
            {
              id: 'card-7',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 7',
              cover: null
            }
          ]
        },
        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'Inprogress column',
          cardOrder: ['card-8', 'card-9', 'card-10'],
          cards: [
            {
              id: 'card-8',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 8',
              cover: null
            },
            {
              id: 'card-9',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 9',
              cover: null
            },
            {
              id: 'card-10',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 10',
              cover: null
            }
          ]
        },
        {
          id: 'column-3',
          boardId: 'board-1',
          title: 'Done column',
          cardOrder: ['card-11', 'card-12', 'card-13'],
          cards: [
            {
              id: 'card-11',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 11',
              cover: null
            },
            {
              id: 'card-12',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 12',
              cover: null
            },
            {
              id: 'card-13',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 13',
              cover: null
            }
          ]
        }
      ]
    }
  ]
}
