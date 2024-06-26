import * as React from 'react';
import { List } from 'react-native-paper';

export const ListItem = ({title, description}) => (
  <List.Item
    title={title ? title:"First Item"}
    description={description?description:"Item description"}
    left={props => <List.Icon {...props} icon="car" />}
  />
);
