import { store } from "core/store";

const SSRReduxList = () => {
  const users: any[] = store.getState().usersRoot.users || [];

  return (
    <div className="flex-col">
      <h1 className="mb-4 border-b-2">SSRReduxList</h1>
      <ul>
        {users?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SSRReduxList;
