import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from './ScreenWrapper'
import url from '../utility/getURLParams'
import Icon from 'react-native-vector-icons/Ionicons';

const DetailContact = ({route}) => {
    // Nhận contact từ route.params
    const { contact  } = route.params;
    //console.log(contact)


    return (
        <View style={styles.container}>
            {/* Hiển thị tên và ảnh liên hệ */}
            <View style={styles.imgheader}>
                <Image source={{ uri: contact.avatar }} style={styles.avatar} />
                <Text style={styles.name}>{contact.name}</Text>
                <Text style={styles.email1}>{contact.email}</Text>
            </View>
            
            <View>
                
                <Text style={styles.phone}><Icon name="phone-portrait-sharp" size={15} marginRight="10"/>  {contact.phone}</Text>
                 <Text style={styles.cell}><Icon name="call-sharp" size={15} marginRight="10"/> {contact.cell}</Text>
                <Text style={styles.email}><Icon name="mail-sharp" size={15} marginRight="10"/>  {contact.email}</Text>
            </View>

            
        </View>
    );
}

export default DetailContact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -28
    },
    imgheader: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua'  
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    phone: {
        fontSize: 18,
        marginTop: 30,
        marginLeft: 10
    },
    cell: {
        fontSize: 18,
        marginTop: 30,
        marginLeft: 10
    },
    email: {
        fontSize: 18,
        marginTop: 30,
        marginLeft: 10
    },
    email1: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 10
    },
});
