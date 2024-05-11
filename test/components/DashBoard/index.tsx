import { Button, Divider, Text } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View,Dimensions, ScrollView } from "react-native";
import { Card } from '@rneui/themed';
import { useState } from "react";
import { Box } from "../Structures/Box";
import { AntDesign, Feather } from "@expo/vector-icons";
interface DummyData {
    project: string,
    site: string,
    totalExpense: Number,
    Date: string,
    Expense_Type: string,
}
export default function DashBoard (){
    const navigation = useNavigation();
    var {width, height} = Dimensions.get('window')
    const [touched, setTouched] = useState({
        state: false,
        id: "",
    });
    const dummyData:[DummyData]=[
        {
          project: "Jindal Steel",
          site: "Angul",
          totalExpense: 10000,
          Date: "12/12/2021",
          Expense_Type: "Labour",
        },
        {
          project: "XYZ Corporation",
          site: "New York",
          totalExpense: 7500,
          Date: "05/25/2022",
          Expense_Type: "Materials",
        },
        {
          project: "ABC Construction",
          site: "Los Angeles",
          totalExpense: 8500,
          Date: "09/10/2023",
          Expense_Type: "Equipment",
        },
        {
          project: "Tech Innovations",
          site: "San Francisco",
          totalExpense: 12000,
          Date: "03/15/2024",
          Expense_Type: "Miscellaneous",
        },
        {
          project: "Global Solutions",
          site: "London",
          totalExpense: 9200,
          Date: "11/02/2022",
          Expense_Type: "Transportation",
        },
        {
          project: "Future Builders",
          site: "Tokyo",
          totalExpense: 11000,
          Date: "07/20/2023",
          Expense_Type: "Labour",
        },
        {
          project: "Sunrise Contractors",
          site: "Sydney",
          totalExpense: 8800,
          Date: "08/05/2022",
          Expense_Type: "Materials",
        },
        {
          project: "Ocean Builders",
          site: "Mumbai",
          totalExpense: 9500,
          Date: "06/30/2023",
          Expense_Type: "Equipment",
        },
        {
          project: "Sky High Ventures",
          site: "Dubai",
          totalExpense: 10500,
          Date: "04/18/2024",
          Expense_Type: "Labour",
        },
        {
          project: "Space Constructions",
          site: "Moscow",
          totalExpense: 8300,
          Date: "02/08/2023",
          Expense_Type: "Miscellaneous",
        }
      ];
      


    return (<>
  
     
      
   <View style={{flex: 1}}>
    <View style={{width: width, height: height - 200}}>
    <Button onPress={()=>{
        navigation.navigate("Home")
      }}
      >
        Go to Home  Page
      </Button>
      <ScrollView>
      {
        dummyData.map((data,index)=>{
            return(
                <Box>
                <Box
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
				>

                </Box>
                <TouchableOpacity
                onPress={()=>{
                    setTouched({
                        state: !touched.state,
                        id: index.toFixed(),
                    });
                }}
                >
                <Card key={index}>
                    <Text>{data.project}</Text>
                    <Text>{data.site}</Text>
                    <Text>{data.totalExpense}</Text>
                    <Text>{data.Date}</Text>
                    <Text>{data.Expense_Type}</Text>
                </Card>
                </TouchableOpacity>
                </Box>
            )
        
        })
       }
      </ScrollView>
      
    </View>
    <View>       
    </View>
    {touched.state && (
				<>
					<Box >
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
            project: dummyData[touched.id as unknown as number].project,
            site: dummyData[touched.id as unknown as number].site,
            totalExpense: dummyData[touched.id as unknown as number].totalExpense.toString(),
            date: dummyData[touched.id as unknown as number].Date,
            expenseType: dummyData[touched.id as unknown as number].Expense_Type,
        } as { project: string; site: string; totalExpense: string; date: string; expenseType: string });
    }}
>
    <Feather name="edit-2" size={24} color="white" />
</Button>
						<Button style={{ backgroundColor: "red" }} 
                        // onPress=
                        // {deleteButton}
                        >
							<AntDesign name="delete" size={24} color="white" />
						</Button>
					</Box>
				</>
			)}
</View>
    </>)
}