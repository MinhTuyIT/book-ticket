/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { FlatList } from 'react-native';
import CustomMovieItem from '../../../../components/CustomMovieItem';
import CustomSeparator from '../../../../components/CustomSeparator';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers';
import { IMovieState } from '../../../../modules/movie/models';
import { getListMovie } from '../../../../modules/movie';
import CustomEmpty from '../../../../components/CustomEmpty';
import testIDs from '../../../../../e2e/testIds';

const ListMovieTab = () => {
    const { listMovie } = useSelector<RootState, IMovieState>(state => state.movie);
    const dispatch = useDispatch();

    const handleLoadMovie = React.useCallback((page: number, limit: number) => {
        dispatch(getListMovie({ page, limit }));
    }, [dispatch]);
    React.useEffect(() => {
        handleLoadMovie(1, 1500);
    }, [handleLoadMovie]);

    const renderEmptyComponent = () => {
        return (<CustomEmpty content={'No movie'} />);
    };

    return (
        <FlatList
            data={listMovie.results}
            testID={testIDs.LIST_MOVIE}
            extraData={() => listMovie.results}
            ListEmptyComponent={renderEmptyComponent}
            keyExtractor={(item) => `movie_${item.id.toString()}`}
            ItemSeparatorComponent={() => <CustomSeparator />}
            renderItem={({ item }) => (<CustomMovieItem  {...item}
                bookTestID={testIDs.BTN_BOOK_TICKET_TAB_MOVIE + item.id}
                favoriteTestID={testIDs.BTN_LIKE_TAB_MOVIE + item.id} />
            )}
        />
    );
};

export default ListMovieTab;
