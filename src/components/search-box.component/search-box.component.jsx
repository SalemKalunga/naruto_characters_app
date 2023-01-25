import { Fragment } from "react";

const SearchBox = (props) => {
  const { changeHandler } = props;
  return (
    <div>
      <form>
        <input type="search" placeholder="search" onChange={changeHandler} />
      </form>
    </div>
  );
};
export default SearchBox;
