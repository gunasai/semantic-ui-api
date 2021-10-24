import React from 'react';
import { Card, Icon, Image, Grid, List } from 'semantic-ui-react';
import { avatarURL } from '../services/usersAPI';

const Users = ({ users }) => {
  return (
    <Grid stackable columns={3}>
      {users.map((user) => (
        <Grid.Column>
          <Card fluid>
            <Image src={avatarURL} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta>
                <span>{`@${user.username}`}</span>
              </Card.Meta>
              <List>
                <List.Item>
                  <List.Icon name="suitcase" />
                  <List.Content>{user.company.name}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="marker" />
                  <List.Content>New York, NY</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="mail" />
                  <List.Content>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href={user.website}>{user.website}</a>
                  </List.Content>
                </List.Item>
              </List>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default Users;
