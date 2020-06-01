import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  Linking,
} from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import {addItem, setForm} from '../../redux/actions/item';
import {fonts as f, colors as c} from '../../styles';

const {width, height} = Dimensions.get('window');

class ItemForm extends Component {
  onInputChange = (inputType, value) => {
    this.props.setForm(inputType, value);
  };

  onSubmit = () => {
    this.props.add(this.props.form);
  };

  render() {
    return (
      <ScrollView>
        <View style={s.container}>
          <Text style={s.title}>redux</Text>
          <View style={s.form}>
            <TextInput
              value={this.props.form.name}
              placeholder="Name"
              style={s.itemInput}
              onChangeText={value => this.onInputChange('name', value)}
            />
            <TouchableOpacity style={s.btnPlus} onPress={() => this.onSubmit()}>
              <IconAD name="pluscircle" size={22} color={c.primary} />
            </TouchableOpacity>
          </View>
          {this.props.formValid ? (
            <Text style={s.msg}>Data successfully added!</Text>
          ) : this.props.formValid !== null ? (
            <Text style={s.msg}>Data cannot be empty!</Text>
          ) : (
            <></>
          )}
          <TouchableOpacity
            style={s.btn}
            onPress={() => this.props.navigation.navigate('List')}>
            <Text style={s.btnText}>Go to List Item</Text>
            <Icon name="chevron-with-circle-right" size={22} color="#f2f2f2" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://github.com/riantosm')}
          style={s.link}>
          <Text style={s.linkText}>https://github.com/riantosm</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.itemReducer.form,
    formValid: state.itemReducer.formValid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: item => dispatch(addItem(item)),
    setForm: (inputType, value) => dispatch(setForm(inputType, value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemForm);

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    height: height - 100,
  },
  title: {
    fontSize: 64,
    marginBottom: 30,
    color: c.primary,
    fontFamily: f.Aquawax,
  },
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
  itemInput: {
    fontSize: 22,
    flex: 1,
    paddingLeft: 20,
    fontFamily: f.GoogleSans_Medi,
  },
  msg: {fontFamily: f.GoogleSans_Medi},
  btn: {
    marginTop: 15,
    backgroundColor: c.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnText: {color: '#f2f2f2', paddingRight: 5, fontFamily: f.GoogleSans_Medi},
  btnPlus: {
    height: '100%',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {position: 'absolute', bottom: 0, width: '100%'},
  linkText: {
    textAlign: 'center',
    fontFamily: f.GoogleSans_Bold,
    color: c.primary,
    fontSize: 10,
  },
});
