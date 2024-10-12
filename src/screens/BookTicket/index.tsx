import React, { useCallback, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import moment from 'moment';
import { NavigationActions } from '../../navigation/NavigationActions';
import { HOME_SCREEN } from '../../constants/screenKeys';
import { useDispatch } from 'react-redux';
import { bookTicketMovie } from '../../modules/movie/reducer';
import { IMovie } from '../../modules/movie/models';
import CustomEmpty from '../../components/CustomEmpty';
import testIDs from '../../../e2e/testIds';


const BookTicket = () => {
    const router = useRoute();
    const params = router.params as IMovie;
    const [disableButton, setDisableButton] = useState<number | undefined>(undefined);
    const dispatch = useDispatch();

    const handleClickBookTicket = useCallback(() => {
        dispatch(bookTicketMovie({ movie: params }));
        NavigationActions.navigate(HOME_SCREEN, { index: 2 });
        setDisableButton(params.id);
    }, [dispatch, setDisableButton, params]);

    if (!params || disableButton === params.id) {
        return (
            <CustomEmpty content={'Please choose to book tickets in the home tab'}/>
        );
    }

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <ScrollView>
                <Image source={{ uri: params.thumbnail }} style={styles.img} />
                <View style={styles.vTime}>
                    <View style={styles.infoTime}>
                        <Text style={styles.titleTime}>{'Launch date'}</Text>
                        <Text style={styles.contentTime}>{moment().format('DD/MM/YYYY')}</Text>
                    </View>
                    <View style={styles.vLine} />
                    <View style={styles.infoTime}>
                        <Text style={styles.titleTime}>{'Duration'}</Text>
                        <Text style={styles.contentTime}>{`${params.duration} min`}</Text>
                    </View>
                    <View style={styles.vLine} />
                    <View style={styles.infoTime}>
                        <Text style={styles.titleTime}>{'Langue'}</Text>
                        <Text style={styles.contentTime}>{'Caption'}</Text>
                    </View>
                </View>
                <View style={styles.lineRow} />
                <View style={styles.info}>
                    <Text style={styles.titleDescription}>{'Description'}</Text>
                    <Text style={styles.description}>{params.description}</Text>
                </View>
            </ScrollView>
            <CustomButton
                disabled={disableButton === params.id}
                testID={testIDs.BTN_BOOK_TICKET}
                onPress={handleClickBookTicket}
                textProps={{ style: styles.txtBookTicket }}
                title={'Book ticket'}
                style={[styles.btn, disableButton === params.id && styles.btnDisabled ]} />
        </SafeAreaView>
    );
};

export default BookTicket;
