import React from "react";
import "./PostUploader.css";

import { Formik } from "formik";
class postUploader extends React.Component {
  render() {
    return (
      <div className="modalWrap">
        <h1
          style={{
            margin: "30px",
            fontSize: "30px",
            textAlign: "center",
            width: "100 %",
          }}
        >
          Ավելացնել հրապարակում
        </h1>

        <Formik
          initialValues={{ title: "", desc: "", img: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            this.props.submit(values);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form className="modal-content" onSubmit={handleSubmit}>
              <div className="container">
                <label htmlFor="title"></label>
                <input
                  id="text"
                  type="text1"
                  placeholder="Մուտքագրել վերնագիրը։"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />

                <label htmlFor="img"></label>
                <input
                  type="text1"
                  placeholder="Մուտքագրել նկարը։"
                  name="img"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.img}
                />
                <label htmlFor="desc"></label>
                <input
                  id="text"
                  type="text1"
                  placeholder="Մուտքագրել այլ տվյալներ։"
                  name="desc"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.desc}
                />

                <button type="submit">Ավելացնել</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default postUploader;
