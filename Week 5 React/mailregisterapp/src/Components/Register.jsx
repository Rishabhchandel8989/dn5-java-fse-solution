/*------------ Hands-on 16 ------------------------*/

import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Validate a single field
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.length >= 5
          ? ""
          : "Name must contain at least 5 characters.";

      case "email":
        return value.includes("@") && value.includes(".")
          ? ""
          : "Enter a valid email.";

      case "password":
        return value.length >= 8
          ? ""
          : "Password must contain at least 8 characters.";

      default:
        return "";
    }
  };

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      password: validateField("password", form.password),
    };

    setErrors(newErrors);

    const isValid =
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.password;

    if (isValid) {
      alert("Registration Successful!");

      setForm({
        name: "",
        email: "",
        password: "",
      });

      setErrors({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
      }}
    >
      <h1>Mail Registration</h1>

      <form onSubmit={handleSubmit}>

        <label>Name</label>
        <br />

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <br />

        <span style={{ color: "red" }}>
          {errors.name}
        </span>

        <br /><br />

        <label>Email</label>
        <br />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <br />

        <span style={{ color: "red" }}>
          {errors.email}
        </span>

        <br /><br />

        <label>Password</label>
        <br />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <br />

        <span style={{ color: "red" }}>
          {errors.password}
        </span>

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;