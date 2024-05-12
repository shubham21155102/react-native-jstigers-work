import React, { useState, useEffect } from 'react';
import { Button, Divider, Text } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Dimensions, ScrollView, Modal, StyleSheet, Pressable, Alert } from "react-native";
import { Card } from '@rneui/themed';
import { Box } from "../Structures/Box";
import { AntDesign, Feather } from "@expo/vector-icons";
interface DummyData {
    project: string,
    site: string,
    totalExpense: Number,
    Date: string,
    Expense_Type: string,
    id?: string,
}

export default function DashBoard() {
    const navigation = useNavigation();
    var { width, height } = Dimensions.get('window');
    const [touched, setTouched] = useState({
        state: false,
        id: "",
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [dummyData, setDummyData] = useState<DummyData[]>([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                // const res2=await GetAllExpenses();
                // console.log(res2)
                const res = await fetch("https://shiner-enjoyed-stinkbug.ngrok-free.app/api/expense", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const data = await res.json();
                setDummyData(data.data);
            } catch (error) {
                console.error("Error fetching expenses:", error);
            }
        };
        fetchExpenses();
    }, [touched, navigation]);

    const deleteExpense = () => {
        fetch("https://shiner-enjoyed-stinkbug.ngrok-free.app/api/expense", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                expenseId: dummyData[parseInt(touched.id)].id
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setModalVisible(false);
            })
            .catch((error) => {
                console.error("Error deleting expense:", error);
            });
        setModalVisible(false);
    };

    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ width: width, height: height - 200 }}>
                    <Button onPress={() => navigation.navigate("Home")}>
                        Go to Home Page
                    </Button>
                    <ScrollView
                   
                    >
                        {dummyData.map((data, index) => (
                            <Box key={index}
                            
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        setTouched({
                                            state: !touched.state,
                                            id: index.toString(),
                                        });

                                    }}
                                    style={{backgroundColor: touched.id === index.toString() ? "#449B2614" : "white",
                                    shadowColor: '#101010',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.15,
                                    shadowRadius: 8,
                                    // elevation: 5,
           
                                 
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'rgba(217, 217, 217, 1)'
                                    }}
                                    
                                >
                                

                                    
                                
                                    <View
                                    
                                    >
                                    {/* <Text>{data.id}</Text> */}
                                        <Text>{data.project}</Text>
                                        <Text>{data.site}</Text>
                                        <Text>{data.totalExpense}</Text>
                                        <Text>{data.Date}</Text>
                                        <Text>{data.Expense_Type}</Text>
                                    </View>
                                    <Divider/>
                                        
                                    
                                </TouchableOpacity>
                            </Box>
                        ))}
                    </ScrollView>
                </View>
                {touched.state && (
                    <>
                        <Box>
                            <Divider />
                        </Box>
                        <Box
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Button
                                onPress={() => {
                                    navigation.navigate("EditExpense", {
                                        project: dummyData[parseInt(touched.id)].project,
                                        expenseId: dummyData[parseInt(touched.id)].id,
                                        site: dummyData[parseInt(touched.id)].site,
                                        totalExpense: dummyData[parseInt(touched.id)].totalExpense.toString(),
                                        date: dummyData[parseInt(touched.id)].Date,
                                        expenseType: dummyData[parseInt(touched.id)].Expense_Type,
                                    });
                                }}
                            >
                                <Feather name="edit-2" size={24} color="white" />
                            </Button>
                            <Button
                                style={{ backgroundColor: "red" }}
                                onPress={() => setModalVisible(true)}
                            >
                                <AntDesign name="delete" size={24} color="white" />
                            </Button>
                        </Box>
                    </>
                )}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure you want to delete?</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={deleteExpense}
                            >
                                <Text style={styles.textStyle}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 5,
    },
    buttonOpen: {
        backgroundColor: '#2196F3',
    },
    buttonClose: {
        backgroundColor: '#F194FF',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
