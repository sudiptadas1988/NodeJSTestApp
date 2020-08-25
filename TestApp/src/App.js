import React, { Component } from 'react';
import { View, TextInput, Text, Picker, StyleSheet } from 'react-native'

class App extends Component {
	
	constructor(props) {
	 	
    	super(props);
    	
    	this.state = {
   					fweight: 'KILO',
   					tweight: 'GRAM',
   					itext : '',
   					otext : ''
   		}
	}
 
	updateFValue = (val) => {
   	
   	  if (this.state.tweight===val){
   	  	var temp = this.state.fweight
   	  	this.setState({ tweight: temp})
   	  	this.setState({ fweight: val })
   	  	this.wconvert(val,temp,this.state.itext)
   	  }
   	  else{
      	this.setState({ fweight: val })
      	this.wconvert(val,this.state.tweight,this.state.itext)
	  }
	  
	}
   
	updateTValue = (val) => {
   	
   	  if (this.state.fweight===val){
   	  	var temp = this.state.tweight
   	  	this.setState({ fweight: temp})
   	  	this.setState({ tweight: val })
   	  	this.wconvert(temp,val,this.state.itext)
   	  }
   	  else{
      	this.setState({ tweight: val })
      	this.wconvert(this.state.fweight,val,this.state.itext)
      }
    	
	}
   
	updateText = (val) => {
   	
   	  val=String(val)
      this.setState({ itext: val })
      this.wconvert(this.state.fweight,this.state.tweight,val)
      
	}
   
	wconvert = (fw,tw,valNum) => {
   	
   	  var vdata  = parseFloat(valNum)
   		
   	  if (isNaN(vdata)){
   			vdata=0
   	  }
   		
      var rate = 1
      
      if ((fw === 'KILO') && (tw === 'GRAM')) {
      	rate = 1000
      }
      
      if ((fw === 'KILO') && (tw === 'POUND')) {
      	rate = 2.2
      }
      
      if ((fw === 'GRAM') && (tw === 'KILO')) {
      	rate = 0.001
      }
      
      if ((fw === 'GRAM') && (tw === 'POUND')) {
      	rate = 0.002
      }
      
      if ((fw === 'POUND') && (tw === 'KILO')) {
      	rate = 0.45
      }
      
      if ((fw === 'POUND') && (tw === 'GRAM')) {
      	rate = 453
      }
      
      vdata = String(vdata * rate)
      
      this.setState({ otext: vdata })
  	
	}
           
	render() {
      return (
         <View id="viewdom" style={styles.container}>
         
            <Text><b>Weight Converter</b></Text>
          
            <Picker className = "picker-From" selectedValue = {this.state.fweight} onValueChange = {this.updateFValue}>
             	<Picker.Item label="KILO" value="KILO"  />
			        <Picker.Item label="GRAM" value="GRAM"  />
					<Picker.Item label="POUND" value="POUND" />
        		</Picker>
        		
				<TextInput defaultValue = {this.state.itext} onChangeText = {this.updateText}
					className = "input-weight"
					type="number"
			        style={{
			          height: 40,
			          borderColor: 'gray',
			          borderWidth: 1
			        }}
					placeholder="Type here to convert!"
        		/>

            <Picker className = "picker-To" selectedValue = {this.state.tweight} onValueChange = {this.updateTValue}>
	            <Picker.Item label="KILO" value="KILO"  />
			        <Picker.Item label="GRAM" value="GRAM"  />
					<Picker.Item label="POUND" value="POUND" />
        		</Picker>
        	 	
        	 	<TextInput defaultValue = {this.state.otext}
					className = "output-weight"
					type="number"
			        style={{
			          height: 40,
			          borderColor: 'gray',
			          borderWidth: 1
			        }}
				/>
            
         </View>
      )
	}
}
export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
})