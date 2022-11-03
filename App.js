import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet } from "react-native";
import {
    ActionBar,
    Avatar,
    Button,
    Card,
    Chip,
    Checkbox,
    Colors,
    Dialog,
    Drawer,
    LoaderScreen,
    Toast,
    PageControl,
    PanningProvider,
    Slider,
    Switch,
    Text,
    View,
} from "react-native-ui-lib";

export default function App() {
    const [visible, setVisible] = useState(false);
    const [toastVisible, setToastVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Toast
                visible={toastVisible}
                position={"top"}
                message='这是一个 toast'
                autoDismiss={5000}
                onDismiss={() => console.log("dismissed")}
            ></Toast>
            <PageControl numOfPages={5} currentPage={0} />
            <Drawer
                rightItems={[
                    {
                        text: "Read",
                        background: Colors.blue30,
                        onPress: () => console.log("read pressed"),
                    },
                ]}
                leftItem={{
                    text: "Delete",
                    background: Colors.red30,
                    onPress: () => console.log("delete pressed"),
                }}
            >
                <View centerV padding-s4 bg-white style={{ height: 60 }}>
                    <LoaderScreen
                        message={"Message goes here"}
                        color={Colors.grey40}
                    />
                </View>
            </Drawer>

            <Text>Open up App.js to start working on your app!</Text>
            <Button
                label='打开 Toast'
                onPress={() => setToastVisible(true)}
            ></Button>
            <Text>换一行</Text>

            <Checkbox
                value={false}
                label='避席畏闻文字狱'
                onValueChange={() => console.log("value changed")}
            />
            <Checkbox
                value={false}
                label='著书都为稻粱谋'
                onValueChange={() => console.log("value changed")}
            />
            <Slider
                value={0}
                minimumValue={0}
                maximumValue={10}
                onValueChange={() => console.log("value changed")}
            />
            <Switch
                value={false}
                onValueChange={() => console.log("value changed")}
            />
            <Chip label={"Chip"} onPress={() => console.log("pressed")} />
            <Chip label={"Chip"} onPress={() => console.log("pressed")} />

            <Avatar
                imageStyle={{ borderRadius: 0.5 }}
                source={{
                    uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.xddzhuisu.com%2FData%2FUpload%2FAvatars%2Fnoavatar.gif&refer=http%3A%2F%2Fwww.xddzhuisu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670056193&t=75740b326f5da4baf53921c78bf55e4e",
                }}
                label={"IT"}
            />

            <Button
                label='打开 Dialog'
                size={Button.sizes.large}
                enableShadow={true}
                onPress={() => setVisible(true)}
            ></Button>

            <Dialog
                visible={visible}
                onDismiss={() => setVisible(false)}
                panDirection={PanningProvider.Directions.DOWN}
            >
                <Card height={300}>
                    <Text>这是一个Card</Text>
                    <Card.Image
                        source={{
                            uri: "https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg",
                        }}
                    />
                </Card>
            </Dialog>

            <ActionBar
                actions={[
                    { label: "首页", onPress: () => console.log("delete") },
                    { label: "发现" },
                    { label: "购物车" },
                    { label: "我的" },
                ]}
                backgroundColor={Colors.$backgroundDark}
            />

            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    t: {
        padding: "12px",
    },
});
