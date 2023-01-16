import React, { FC } from "react";
import { Search as ReactSearch } from "semantic-ui-react";

const Search: FC = () => {
  return <ReactSearch placeholder={"Enter repository name..."} size={"big"} />;
};

export default Search;
