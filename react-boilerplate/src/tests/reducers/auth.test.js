import authReducer from "../../reducers/auth";

test("should login user", () => {
  const action = { type: "LOGIN", uid: "1234" };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should clear uid for logout", () => {
  const action = { type: "LOGOUT" };
  const state = authReducer({ uid: "anythig" }, action);
  expect(state).toEqual({});
});
