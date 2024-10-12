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

const ListBookedTab = () => {
  const { listBooked } = useSelector<RootState, IMovieState>(state => state.movie);
  const renderEmptyComponent = () => {
    return (<CustomEmpty content={'No movies booked'} />);
  };
  return (
    <FlatList
      data={listBooked.results}
      testID={testIDs.LIST_BOOKED}
      contentContainerStyle={styles.container}
      style={styles.list}
      ListEmptyComponent={renderEmptyComponent}
      keyExtractor={(item) => `booked_${item.id.toString()}`}
      ItemSeparatorComponent={() => <CustomSeparator />}
      renderItem={({ item }) => (<CustomMovieItem  {...item}
        bookTestID={testIDs.BTN_BOOK_TICKET_TAB_BOOKED + item.id}
        favoriteTestID={testIDs.BTN_LIKE_TAB_BOOKED + item.id}
      />)}
    />
  );
};

export default ListBookedTab;
