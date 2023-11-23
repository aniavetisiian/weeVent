import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Registation.css";
import Error from "../Error";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("required"),
  avatar: Yup.string().required("required"),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(50, "Must be shorter than 50")
    .min(2, "Must be more than 2 letters")
    .required("required"),
  password: Yup.string()
    .min(6, "Must be more than 6 letters")
    .required("required"),
});

class Registration extends React.Component {
  singUp = async (values) => {
    console.log(values);
    try {
      const data = await fetch("http://localhost:3000/user/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const fetchedData = await data.json();
      console.log(fetchedData);

      if (fetchedData.message) {
        alert(fetchedData.message);
      } else {
        console.log(fetchedData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Formik
        initialValues={{ username: "", email: "", password: "", avatar: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          this.singUp(values);
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="modal-content" onSubmit={handleSubmit}>
            <div className="container">
              <label htmlFor="text">
                <b className="textInput">Օգտանուն</b>
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                className={
                  touched.username && errors.username ? "has-error" : null
                }
              />
              <Error touched={touched.username} message={errors.username} />

              <label htmlFor="avatar">
                <b className="textInput">Գլխավոր նկար</b>
              </label>
              <input
                id="avatar"
                type="text"
                placeholder="Enter img for avatar"
                name="avatar"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.avatar}
                className={touched.avatar && errors.avatar ? "has-error" : null}
              />
              <Error touched={touched.avatar} message={errors.avatar} />
              <label htmlFor="email">
                <b className="textInput">Էլ. հասցե</b>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? "has-error" : null}
              />
              <Error touched={touched.email} message={errors.email} />
              <label htmlFor="password">
                <b className="textInput">Գաղտնագիր</b>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={
                  touched.password && errors.password ? "has-error" : null
                }
              />
              <Error touched={touched.password} message={errors.password} />
              <button type="submit">Գրանցվել</button>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

export default Registration;
