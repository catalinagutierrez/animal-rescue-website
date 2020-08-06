import { createSelector } from 'reselect';

const selectDiscover = (state) => state.discover;

export const selectCollections = createSelector(
    [selectDiscover],
    (discover) => discover.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) =>
        collections
            ? Object.keys(collections).map((key) => collections[key])
            : []
);

export const selectCollection = (collectionUrlParam) =>
    createSelector([selectCollections], (collections) =>
        collections ? collections[collectionUrlParam] : null
    );

export const selectIsCollectionFetching = createSelector(
    [selectDiscover],
    (discover) => discover.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectDiscover],
    (discover) => !!discover.collections
);
