const INITIAL_STATE = {
    sections: [
        {
            title: 'kittens',
            imageUrl: 'https://i.ibb.co/KG13LP9/kitten-Cover.png',
            id: 1,
            linkUrl: 'shop/hats',
        },
        {
            title: 'puppies',
            imageUrl: 'https://i.ibb.co/f8zCnL3/puppy-cover.jpg',
            id: 2,
            linkUrl: 'shop/jackets',
        },
        {
            title: 'veterans',
            imageUrl: 'https://i.ibb.co/vXqKzSN/veteran-cover.jpg',
            id: 3,
            linkUrl: 'shop/sneakers',
        },
        {
            title: 'cats',
            imageUrl: 'https://i.ibb.co/6J8Bdrz/cat-cover.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens',
        },
        {
            title: 'dogs',
            imageUrl: 'https://i.ibb.co/MC07yPN/dog-cover.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens',
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
