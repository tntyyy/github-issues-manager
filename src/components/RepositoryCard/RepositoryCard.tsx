import React, { FC } from "react";
import { Button, Item } from "semantic-ui-react";

const RepositoryCard: FC = () => {
  return (
    <Item.Group>
      <Item>
        <Item.Image
          size="small"
          src="https://avatars.githubusercontent.com/u/97404151?v=4"
        />

        <Item.Content verticalAlign={"bottom"}>
          <Item.Header as="h3">Some Repo</Item.Header>
          <Item.Description>
            <p>description description description description...</p>
            <p>Many people also have their own barometers for what makes a cute dog.</p>
          </Item.Description>
          <Item.Extra>
            <Button primary floated="left">
              Issues
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default RepositoryCard;
