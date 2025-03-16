import React from "react";
import { View, ActivityIndicator } from 'react-native';
import Stack from "../routes/stack.routes";

function StackRoutes() {
    //daqui a pouco isso esta saindo daqui
    const loading = false;
    const signed = false;

    return (
        signed ? <View></View> : <Stack/>
    );
}

export default StackRoutes;