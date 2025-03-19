import React from "react";
import { View, ActivityIndicator } from 'react-native';
import Stack from "../routes/stack.routes";

function StackRoutes() {
    //isto é para as infos dos usuarios ignora por enquanto 
    const loading = false;
    const signed = false;

    return (
        signed ? <View></View> : <Stack/>
    );
}

export default StackRoutes;