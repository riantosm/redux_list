import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import {addFood, setForm} from '../../redux/actions/food';

class FoodForm extends Component {
  onInputChange = (value, inputType) => {
    this.props.setForm(inputType, value);
  };

  onSubmit = () => {
    this.props.add(this.props.form);
  };

  render() {
    return (
      <View style={s.container}>
        <Text style={s.title}>Redux</Text>
        <View style={s.form}>
          <TextInput
            value={this.props.form.name}
            placeholder="Name"
            style={s.foodInput}
            onChangeText={value => this.onInputChange(value, 'name')}
          />
          <TouchableOpacity style={s.btnPlus} onPress={() => this.onSubmit()}>
            <IconAD name="pluscircle" size={22} color="#474787" />
          </TouchableOpacity>
        </View>
        {this.props.formValid ? (
          <Text>Data successfully added!</Text>
        ) : this.props.formValid !== null ? (
          <Text>Data cannot be empty!</Text>
        ) : (
          <></>
        )}
        <TouchableOpacity
          style={s.btn}
          onPress={() => this.props.navigation.navigate('List')}>
          <Text style={s.btnText}>Go to FoodList</Text>
          <Icon name="chevron-with-circle-right" size={22} color="#f2f2f2" />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    foods: state.foodReducer.foodList,
    form: state.foodReducer.form,
    formValid: state.foodReducer.formValid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: food => dispatch(addFood(food)),
    setForm: (inputType, value) => dispatch(setForm(inputType, value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodForm);

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {fontSize: 64, marginBottom: 30, color: '#40407a'},
  form: {
    marginBottom: 15,
    borderWidth: 1,
    paddingVertical: 0,
    width: '80%',
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  foodInput: {
    fontSize: 22,
    flex: 1,
    paddingLeft: 20,
  },
  btn: {
    marginTop: 15,
    backgroundColor: '#474787',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnText: {color: '#f2f2f2', paddingRight: 5},
  btnPlus: {
    height: '100%',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
