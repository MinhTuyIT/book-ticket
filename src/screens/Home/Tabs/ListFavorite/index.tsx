/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { FlatList } from 'react-native';
import CustomMovieItem from '../../../../components/CustomMovieItem';
import CustomSeparator from '../../../../components/CustomSeparator';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers';
import { IMovieState } from '../../../../modules/movie/models';
import CustomEmpty from '../../../../components/CustomEmpty';
import styles from './styles';
import testIDs from '../../../../../e2e/testIds';

const ListFavoriteTab = () => {
  const { listFavorite } = useSelector<RootState, IMovieState>(state => state.movie);
  const renderEmptyComponent = () => {
    return (<CustomEmpty content={'No movies favorite'} />);
  };
  return (
    <FlatList
      data={listFavorite.results}
      testID={testIDs.LIST_FAVORITE}
      style={styles.list}
      contentContainerStyle={styles.container}
      extraData={()=>listFavorite.results}
      ListEmptyComponent={renderEmptyComponent}
      keyExtractor={(item) => `favorite_${item.id.toString()}`}
      ItemSeparatorComponent={() => <CustomSeparator />}
      renderItem={({ item }) => {
        return (<CustomMovieItem {...item}
          bookTestID={testIDs.BTN_BOOK_TICKET_TAB_FAVORITE + item.id}
          favoriteTestID={testIDs.BTN_LIKE_TAB_FAVORITE + item.id}
        />)
      }}
    />
  );
};

export default ListFavoriteTab;
