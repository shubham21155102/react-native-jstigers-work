import { Button, Header } from '@rneui/base';
import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, ToastAndroid } from 'react-native';

interface EditExpenseFormProps {
    project?: string,
    site?: string,
    totalExpense?: string,
    date?: string,
    expenseType?: string,
    expenseId?: string,
}
const EditExpenseForm: React.FC<EditExpenseFormProps> = (props: any) => {
    
    const [project, setProject] = useState(props.route.params.project || '');
    const [site, setSite] = useState(props.route.params.site || '');
    const [totalExpense, setTotalExpense] = useState(props.route.params.totalExpense || '');
    const [date, setDate] = useState(props.route.params.date || '');
    const [expenseType, setExpenseType] = useState(props.route.params.expenseType || '')
    console.log(props)
    const saveChanges=async()=>{
        console.log('save changes')
        // console.log(project,site,totalExpense,date,expenseType,props.route.params.expenseId)
        const respose =await fetch("https://shiner-enjoyed-stinkbug.ngrok-free.app/api/expense",{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                project:project,
                site:site,
                totalExpense:totalExpense,
                Date:date,
                Expense_Type:expenseType,
                expenseId:props.route.params.expenseId
            })
        })
        const data=await respose.json();
        console.log(data)
    }
    return (
        <>
        <Text
        style={
            {
                top:10,
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 20,
                backgroundColor: 'lightblue',
            }
        }
        >EDIT EXPENSE</Text>
       
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.label}>Project</Text>
                <TextInput
                    style={styles.input}
                    value={project}
                    onChangeText={setProject}
                    placeholder={props.project || 'Project'}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Site</Text>
                <TextInput
                    style={styles.input}
                    value={site}
                    onChangeText={setSite}
                    placeholder="Site"
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Total Expense</Text>
                <TextInput
                    style={styles.input}
                    value={totalExpense}
                    onChangeText={setTotalExpense}
                    placeholder="Total Expense"
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Date</Text>
                <TextInput
                    style={styles.input}
                    value={date}
                    onChangeText={setDate}
                    placeholder="Date"
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Expense Type</Text>
                <TextInput
                    style={styles.input}
                    value={expenseType}
                    onChangeText={setExpenseType}
                    placeholder="Expense Type"
                />
            </View>
        </View>
        <Button onPress={saveChanges}>Save Changes</Button>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    label: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    input: {
        flex: 2,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 16,
    },
});

export default EditExpenseForm;
