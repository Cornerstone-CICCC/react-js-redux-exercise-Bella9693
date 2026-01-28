import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import {
  incrementAge,
  setFirstname,
  setLastname,
} from "../features/user/UserSlice";

const User = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { firstname, lastname, age } = useSelector(
    (state: RootState) => state.user,
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Info</h2>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Age: {age}</p>

      <button onClick={() => dispatch(incrementAge())}>Increment Age</button>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => dispatch(setFirstname(e.target.value))}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => dispatch(setLastname(e.target.value))}
        />
      </div>
    </div>
  );
};

export default User;
