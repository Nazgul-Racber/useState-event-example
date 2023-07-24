import { useState } from "react";

const FormObject = () => {
  const [formValues, setFormVaules] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
  });
  const [remember, setRemember] = useState(false);

  const handleForm = (e) => {
    setFormVaules({ ...formValues, [e.target.id]: e.target.value });
  };
  const handleRemember = (e) => {
    setRemember(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
        name:${formValues.name},
        email:${formValues.email},
        password: ${formValues.password},
        country: ${formValues.country},
        remember:${remember}`);
  };

    return (
      <div className="container rounded text-bg-dark mt-4">
        <div className="text-center p-3">
          <form onSubmit={handleSubmit} action="" method="post">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                <strong>Username:</strong>
              </label>
              <input
                placeholder="username"
                onChange={handleForm}
                value={formValues.name}
                type="text"
                name="name"
                id="name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <strong>E-mail:</strong>
              </label>
              <input
                onChange={handleForm}
                value={formValues.email}
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <strong>Password:</strong>
              </label>
              <input
                onChange={handleForm}
                value={formValues.password}
                type="password"
                name="password"
                id="password"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                <strong>Country:</strong>
              </label>
              <select
                onChange={handleForm}
                value={formValues.country}
                name="country"
                id="country"
                className="form-control"
              >
                <optgroup label="Europe">
                  <option value="Germany">Germany</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="France">France</option>
                </optgroup>
                <optgroup label="Asia">
                  <option value="China">China</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Japan">Japan</option>
                </optgroup>
              </select>
            </div>
            <div className="mb-3 form-check">
              <input
                onChange={handleRemember}
                checked={remember}
                type="checkbox"
                className="form-check-input"
                id="remember"
              />
              <label htmlFor="remember" className="form-check-label">
                <strong>Remember me:</strong>
              </label>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default FormObject;
