import SSRReduxList from "components/templates/SSRReduxList";
import { setUsers } from "core/slice/reduxSearchTemplateSlice";
import { store } from "core/store";

const ReduxUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const userList = await res.json();
  store.dispatch(setUsers(userList));

  return (
    <div className="flex-col">
      {/* <div>{JSON.stringify(userList)}</div> */}
      <SSRReduxList />
    </div>
  );
};

export default ReduxUser;
