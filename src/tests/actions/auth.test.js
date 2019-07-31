import { login, logout } from "../../actions/auth";

test("should setup login", () => {
  const action = login("123abc");
  expect(action).toEqual({
    type: "LOGIN",
    uid: "123abc"
  });
});

test("should setup LOGOUT", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
