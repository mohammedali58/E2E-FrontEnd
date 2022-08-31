import { addUser, getUser } from "api/user";
import { Input } from "components";
import { User } from "models/user";
import { FormEvent, useState } from "react";
import "./styles.css";

const initialUserData = {
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  mobile_number: "",
};
const Home = () => {
  const [form, setForm] = useState<User>(initialUserData);
  const [user, setUser] = useState<User>(initialUserData);

  const onSubmitForm = (evt: FormEvent) => {
    evt.preventDefault();
    addUser(form).then((res) => setUser(res));
  };

  const inputChangeHandler = (field: string, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const getUserInfo = () => {
    getUser("1").then((res) => setUser(res));
  };

  return (
    <div className="home">
      <h2>Add User</h2>
      <form onSubmit={onSubmitForm} className="form">
        <h5>Create New User</h5>
        <Input
          label="First Name"
          value={form.first_name}
          onChange={(value) => inputChangeHandler("first_name", value)}
        />
        <Input
          label="Last Name"
          value={form.last_name}
          onChange={(value) => inputChangeHandler("last_name", value)}
        />
        <Input
          label="Email"
          value={form.email}
          onChange={(value) => inputChangeHandler("email", value)}
        />
        <Input
          label="Mobile Number"
          value={form.mobile_number}
          onChange={(value) => inputChangeHandler("mobile_number", value)}
        />
        <Input
          label="Address"
          value={form.address}
          onChange={(value) => inputChangeHandler("address", value)}
        />
        <button type="submit">Add User</button>
      </form>

      <div className="header">
        <h2>User Info</h2>
        <button onClick={getUserInfo}>Get User Info</button>
      </div>
      {user.email ? (
        <div className="user-container">
          <div className="value-container">
            <p className="label">Full Name</p>
            <p className="value">
              {user.first_name} {user.last_name}
            </p>
          </div>
          <div className="value-container">
            <p className="label">Email</p>
            <p className="value">{user.email}</p>
          </div>
          <div className="value-container">
            <p className="label">Mobile Number</p>
            <p className="value">{user.mobile_number}</p>
          </div>
          <div className="value-container">
            <p className="label">Address</p>
            <p className="value">{user.address}</p>
          </div>
        </div>
      ) : (
        <p>No User Found!</p>
      )}
    </div>
  );
};

export default Home;
