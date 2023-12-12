import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./SignIn.css";
import Error from "../Error";
import { withRouter } from "react-router";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("required"),

  password: Yup.string()
    .min(6, "Must be more than 6 letters")
    .required("required"),
});

class SignIN extends React.Component {
  singIn = async (values) => {
    console.log(values);

    try {
      const data = await fetch("http://localhost:3000/user/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const fetchedData = await data.json();

      if (fetchedData.message) {
        alert(fetchedData.message);
      } else {
        localStorage.setItem("token", fetchedData.auth_token);
        localStorage.setItem("userId", fetchedData.userId);

        this.props.history.push("/myProfile");
      }
    } catch (error) {
      alert(error);
    }
  };
  render() {
    console.log(this.props);
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          this.singIn(values);
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
                <b className="textInput">Էլ. հասցե</b>
              </label>
              <input
                id="text"
                type="email"
                placeholder="Մուտքագրել էլ. հասցեն։"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? "has-error" : null}
              />
              <Error touched={touched.email} message={errors.email} />

              <label htmlFor="password">
                <b className="textInput">Գաղտնաբառ</b>
              </label>
              <input
                id="password1"
                type="password"
                placeholder="Մուտքագրել գաղտնաբառը։"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={
                  touched.password && errors.password ? "has-error" : null
                }
              />
              <Error touched={touched.password} message={errors.password} />
              <button type="submit">Մուտք գործել</button>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

export default withRouter(SignIN);
