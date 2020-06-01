import React, {Component} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import {deleteItem} from '../../redux/actions/item';
import {fonts as f, colors as c} from '../../styles';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FlatList
        style={s.listContainer}
        data={this.props.items}
        keyExtractor={(item, index) => item.key.toString()}
        ListEmptyComponent={<Text style={s.text}>No data</Text>}
        renderItem={data => (
          <ListItem
            title={data.item.name}
            bottomDivider
            titleStyle={{
              fontFamily: f.GoogleSans_Medi,
            }}
            rightIcon={
              <Icon
                name="delete"
                size={36}
                color={c.primary}
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
    items: state.itemReducer.itemList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: key => dispatch(deleteItem(key)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemList);

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    padding: 20,
    fontFamily: f.GoogleSans_Medi,
  },
});
