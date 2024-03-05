"use server";
import SearchInput from "components/templates/SearchInput";
import { setUsers } from "core/slice/reduxSearchTemplateSlice";
import { store } from "core/store";

// NOTE: PreLoader is not to be set and unused for now. As preloader was created to use store from SSR to CSR

const ReduxUser = async () => {
  "use server";
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const userList = await res.json();
  store.dispatch(setUsers(userList));

  return (
    <div className="flex-col items-center justify-center w-100">
      <h3>Taken to /puressr</h3>
      <SearchInput />
    </div>
  );
};

export default ReduxUser;
