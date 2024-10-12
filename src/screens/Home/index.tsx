import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { ListMovieTab, ListFavoriteTab, ROUTE_KEY, ListBookedTab } from './Tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import testIDs from '../../../e2e/testIds';
import CustomTabBar from '../../components/CustomTabBar';


const renderScene = SceneMap({
    [ROUTE_KEY.MOVIE]: ListMovieTab,
    [ROUTE_KEY.FAVORITE]: ListFavoriteTab,
    [ROUTE_KEY.BOOKED]: ListBookedTab,
});


const HomeScreen = () => {
    const layout = useWindowDimensions();
    const router = useRoute();
    const params = router.params as any;
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        if (params?.index) {
            setIndex(params.index);
            delete params.index;
        }
    }, [params]);

    const onChangeIndex = React.useCallback((value: number) => { setIndex(value) }, []);

    const [routes] = React.useState([
        { key: ROUTE_KEY.MOVIE, title: 'List Movie', testID:testIDs.TAB_VIEW_MOVIE },
        { key: ROUTE_KEY.FAVORITE, title: 'List Favorite', testID:testIDs.TAB_VIEW_FAVORITE },
        { key: ROUTE_KEY.BOOKED, title: 'List Booked', testID:testIDs.TAB_VIEW_BOOKED },
    ]);


    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={onChangeIndex}
                renderTabBar={(props)=>(<CustomTabBar {...props}/>)}
                initialLayout={{ width: layout.width }}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
