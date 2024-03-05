"use client";
import { useTypedSelector } from "core/hooks";
import { setSearch } from "core/slice/reduxSearchTemplateSlice";
import { useDispatch } from "react-redux";
const SearchInput = () => {
  const dispatch = useDispatch();
  const search = useTypedSelector(state => state.usersRoot.search);
  return (
    <div>
      <input type="text" value={search} onChange={e => dispatch(setSearch(e.target.value))} />
    </div>
  );
};

export default SearchInput;
