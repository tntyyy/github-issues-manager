import React from "react";
import { Container, Header } from "semantic-ui-react";

import styles from "./App.module.css";
import RepositoryCard from "./components/RepositoryCard/RepositoryCard";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Header as={"h1"} textAlign={"center"}>
          GitHub Issues Manager
        </Header>
        <Search />
        <div className={styles.repositories}>
          <RepositoryCard />
        </div>
      </div>
    </Container>
  );
};

export default App;
