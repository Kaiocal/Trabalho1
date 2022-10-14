import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";


import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from "react-native-gesture-handler";

export default function Email({ route }) {
    const { id } = route.params;

    const [email, setEmail] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/' + id)
            const email = await response.json();
            setEmail(email);
        }
        getData();
    }, []);

    function renderItem({ item }) {
        return <View>
            <View style={styles.titulo}>
                <Text style={styles.texto1}>{item.id}</Text>
            </View>

        </View>

    }

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <FlatList
                data={email.id}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    titulo: {
        flex: 1,
        backgroundColor: 'green',
    },
    info: {
        height: 100,
        backgroundColor: 'blue',
    },
    corpo: {
        flex: 1,
        backgroundColor: 'orange',
    },
    texto1: {
        fontSize: 20,
        flexDirection: 'row',

    }
});