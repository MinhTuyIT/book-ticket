import React, { memo, useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import CustomButton from '../CustomButton';


import { NavigationActions } from '../../navigation/NavigationActions';
import { BOOK_TICKET_SCREEN } from '../../constants/screenKeys';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updateFavoriteMovie } from '../../modules/movie/reducer';
import { IMovie } from '../../modules/movie/models';
import CustomVectorIcon, { VectorIconType } from '../../components/CustomVectorIcon';
import { colors } from '../../constants/vars';

const CustomMovieItem = (props: IMovie & { favoriteTestID?: string; bookTestID?: string; }) => {
    const { title, thumbnail, description, isFavorite, isBooked, rate, numberRates, duration } = props;
    const dispatch = useDispatch();

    const handleUpdateFavorite = useCallback(() => {
        dispatch(updateFavoriteMovie({
            movie: {
                ...props,
                isFavorite: !isFavorite,
            }
        }));
    }, [dispatch, isFavorite, props]);

    const handleClickMovieItem = useCallback(() => NavigationActions.navigate(BOOK_TICKET_SCREEN, { ...props }), [props]);

    return (
        <View style={styles.container}>
            <Image source={{ uri: thumbnail }} style={styles.img} />
            <View style={styles.info}>
                <View style={styles.infoRate}>
                    <CustomVectorIcon type={VectorIconType.MCI} name={'star'} size={12} color="#FA8C16" />
                    <Text style={styles.rate} numberOfLines={1}>{` ${rate}/10`}</Text>
                    <Text style={styles.rate} numberOfLines={1}>{` (${numberRates} Rate)`}</Text>
                </View>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.description} numberOfLines={2}>{description}</Text>
                <View style={styles.vTime}>
                    <CustomVectorIcon type={VectorIconType.MCI} name={'clock-outline'} size={12} color={colors.CONTENT} />
                    <Text style={styles.time} >{` ${duration}'  |  `}</Text>
                    <CustomVectorIcon type={VectorIconType.MI} name={'date-range'} size={12} color={colors.CONTENT} />
                    <Text style={styles.time} >{moment().format('DD/MM/YYYY')}</Text>
                </View>
                <View style={styles.containerBtn}>
                    <CustomButton testID={props.favoriteTestID} style={[styles.btn, isFavorite && styles.hightLight]}
                        onPress={handleUpdateFavorite}
                        textProps={{
                            style: isFavorite && styles.hightLight,
                        }}
                        title={isFavorite ? 'Liked' : 'Like'} />
                    <CustomButton
                        onPress={handleClickMovieItem}
                        testID={props.bookTestID}
                        disabled={isBooked}
                        textProps={{
                            style: !isBooked && styles.hightLight,
                        }}
                        style={[styles.btn, styles.btnBook, !isBooked && styles.hightLight]}
                        title={isBooked ? 'Watched' : 'Book ticket'} />
                </View>
            </View>
        </View>
    );
};

export default memo(CustomMovieItem);
