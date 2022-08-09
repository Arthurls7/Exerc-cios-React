import { useState } from "react";

export default function Form({ formName }) {

  const [formField, setFormField] = useState({});

  const handleValue = (e) => {
    const attField = e.target.name;
    const newValue = e.target.value;

    setFormField({
      [attField]: newValue
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  }

  return (
    <div>
      <div className="center">
        <h1>{formName}</h1>
        <form onSubmit={handleSubmit}>

          <div className="inputbox">
            <input type="text" name="name" required="required" value={formField.name || ""} onChange={handleValue} />
            <span>Email</span>
          </div>

          <div className="inputbox">
            <input type="password" name="password" required="required" value={formField.password || ""} onChange={handleValue} />
            <span>Password</span>
          </div>
        </form>

        <div id="button">
          <button className="button" type="submit">Submit</button></div>
      </div>

    </div>
  );
}