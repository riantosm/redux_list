import React, {Component} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import {deleteFood} from '../../redux/actions/food';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FlatList
        style={s.listContainer}
        data={this.props.foods}
        keyExtractor={(item, index) => item.key.toString()}
        ListEmptyComponent={<Text style={s.text}>No data</Text>}
        renderItem={data => (
          <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={
              <Icon
                name="delete"
                size={36}
                color={'#474787'}
                onPress={() => this.props.delete(data.item.key)}
              />
            }
          />
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    foods: state.foodReducer.foodList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: key => dispatch(deleteFood(key)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodList);

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    padding: 20,
  },
});
