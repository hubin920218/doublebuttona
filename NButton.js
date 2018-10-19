/*************************************************************************************************
 * <pre>
 * @包路径：
 *
 * @类描述:
 * @版本:       V3.0.0
 * @作者        bigwhite
 * @创建时间    2018-10-18 21:29
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React, {Component, PureComponent} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from "react-native";

 class NButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={ButtonStyles.container}>
                <Text>测试按钮</Text>
            </View>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}

let {width, height} = Dimensions.get("window")
const ButtonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'blue',
    },
});

export default NButton;