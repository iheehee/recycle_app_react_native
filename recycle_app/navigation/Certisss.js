import * as React from "react";
import { View, useWindowDimensions, Text, ScrollView } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

// Scenes
const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "red" }}>
    <Text style={{ fontSize: 50 }}>dddd</Text>
    <Text style={{ fontSize: 50 }}>dddd</Text>
    <Text style={{ fontSize: 50 }}>dddd</Text>
    <Text style={{ fontSize: 50 }}>dddd</Text>
    <Text style={{ fontSize: 50 }}>dddd</Text>
    <Text style={{ fontSize: 50 }}>dddd</Text>
    <Text style={{ fontSize: 50 }}>dddd</Text>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "blue", overflow: "visible" }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "yellow" }} />
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: "green" }} />
);

// Tab Views
const FirstTabView = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

const SecondTabView = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "third", title: "Third" },
    { key: "fourth", title: "Fourth" },
  ]);
  const renderScene = SceneMap({
    third: ThirdRoute,
    fourth: FourthRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default function TabViewExample() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <>
          <View style={{ flexGrow: 1 }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text>Header</Text>
            </View>
            <FirstTabView />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text>Other Content</Text>
            </View>
            <SecondTabView />
          </View>
        </>
      </ScrollView>
    </View>
  );
}
