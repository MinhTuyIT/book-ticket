import React, {
  Ref,
  useCallback,
  useMemo,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { useWindowDimensions } from 'react-native';
import {
  TabView,
  Route,
  TabBar,
  SceneRendererProps,
  NavigationState,
  SceneMap,
} from 'react-native-tab-view';


const CustomTabView = <T extends Route>(
  props: any,
  ref: Ref<any>
) => {
  const {
    routes,
    renderScene,
    onIndexChange,
    initialIndex = 0,
    sceneList,
    tabBarProps,
    ...restProps
  } = props;
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(initialIndex);

  useImperativeHandle(ref, () => ({
    setIndex: setIndex,
  }));

  const handleIndexChange = useCallback(
    (_index: number) => {
      setIndex(_index);
      onIndexChange?.(_index);
    },
    [onIndexChange]
  );

  const customRenderScene = useMemo(() => {
    if (renderScene) {
      return renderScene;
    }
    if (sceneList) {
      return SceneMap(sceneList);
    }
    return SceneMap({});
  }, [renderScene, sceneList]);

  const renderTabBar = (
    _props: SceneRendererProps & { navigationState: NavigationState<T> }
  ) => {
    return <TabBar {..._props} {...tabBarProps} />;
  };

  return (
    <TabView
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      {...restProps}
      renderScene={customRenderScene}
      navigationState={{ index, routes }}
      onIndexChange={handleIndexChange}
    />
  );
};

type ForwardRef =(
  props: any& {
    ref?: React.ForwardedRef<any>;
  }
) => ReturnType<typeof CustomTabView>;

export default forwardRef(CustomTabView) as ForwardRef;
