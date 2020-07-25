import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true,
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');

        //OBSERVER STYLE (live updates)
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
        //     async (snapshot) => {
        //         const collectionsMap = convertCollectionsSnapshotToMap(
        //             snapshot
        //         );
        //         updateCollections(collectionsMap);
        //         this.setState({ loading: false });
        //     }
        // );

        //PROMISE STYLE (update API call on mount)
        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });

        //FETCH PATTERN
        // fetch(firebaseurl)
        // .then(response => response.json())
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => (
                        <CollectionsOverviewWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionPageWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
        dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

// CODE FOR READING LOCAL FOLDER DATA
// class ShopPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             collections: SHOP_DATA
//         }
//     }

//     render() {
//         const {collections} = this.state;
//         return (<div className='shop-page'>
//             {
//                 collections.map(({id, ...otherCollectionProps}) => (
//                     <CollectionPreview key={id} {...otherCollectionProps} />
//                 ))
//             }
//         </div>);
//     }
// }

// export default ShopPage;
