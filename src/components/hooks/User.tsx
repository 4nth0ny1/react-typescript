import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Anthony",
      email: "anthony@test.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>Username: {user.name}</div>
      <div>Email: {user.email}</div>
    </div>
  );
};
