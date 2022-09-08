import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function List({data}) {
    const navigation = useNavigation();
   
 return (
 <View>
   <TouchableOpacity onPress={ () => navigation.navigate('Converter',{data: data}) } style={styles.container}>
              <Text style={styles.Title}>{data.name}</Text>
             <View style={styles.header}>
                <View style={{borderWidth:3, borderColor:'#c0c0c0'}}>
                    <Text style={styles.headerText}>{data.code}</Text>
                </View>

               <View style={{justifyContent:'center', alignItems:'center'}}>
                   <Text style={{fontSize:16, color: '#FFF'}}>Valor de venda</Text>
                   <Text style={{fontSize:22, color: '#FFF'}}>R$ {data.ask}</Text>
               </View>
               
            </View>
            
       <View style={styles.detail}>
        {data.pctChange < 0 ?
           (<View style={[styles.viewVariacao,{backgroundColor:'red'}]}>
              <Icon name='trending-down' color='#FFF' size={22}/>
            <Text style={styles.porVaraicao}>{data.pctChange}%</Text>
        </View>
         ):
           (<View style={[styles.viewVariacao,{backgroundColor:'green'}]}>
            <Icon name='trending-up' color='#FFF' size={22}/>
             <Text style={styles.porVaraicao}>    
                {data.pctChange}%
            </Text>
           </View>
           
           )
        }
      {
        data.varBid < 0 ? (
            <Text style={[styles.variacao,{backgroundColor:'red'}]}>{data.varBid}</Text>
        ):(
            <Text style={[styles.variacao,{backgroundColor:'green'}]}>{data.varBid}</Text>
        )
      }   
       
       </View>
       
    </TouchableOpacity>
    <View style={styles.split}></View>
</View>
  );
}

const styles = StyleSheet.create({
    split:{
        width: '100%',
        height: 3,
        backgroundColor: '#004B41',
        
  },
    container:{
        flex:1,
        marginVertical:10,
        marginHorizontal:6,
        paddingHorizontal: 6,
        borderRadius:5   
    },
    Title:{
       fontSize:20,
       color: '#FFF',
       fontWeight:'bold',
       textAlign:'center'
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',  
    },
    headerText:{
        fontSize:26,
        padding: 6,
        color: '#c1c1c1'      
    },
    detail:{
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    viewVariacao:{
        flexDirection:'row',
        borderRadius:15,
        paddingHorizontal:10,
    },
    porVaraicao:{
        fontSize:22,
        marginLeft:6,
        color: '#FFF'
    },
    variacao:{
        fontSize:22,
        paddingHorizontal:20,
        borderRadius:15,
        color: '#FFF'
    }
})