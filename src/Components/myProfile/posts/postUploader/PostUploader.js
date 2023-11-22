import React from "react";
import "./PostUploader.css";

import { Formik } from "formik";
class postUploader extends React.Component {
  // submit = async(value) => {
  //   const token = localStorage.getItem('token')
  //     const data = await fetch('http://localhost:3000/posts/add',{
  //         method: 'POST',
  //         headers: {
  //             "auth-token": token,
  //             "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify(value)
  //     })
  //     const fetchedData = await data.json()
  //     console.log(fetchedData);
  // }
  render() {
    return (
      <div className="modalWrap">
        <h1
          style={{
            margin: "30px",
            fontSize: "50px",
            textAlign: "center",
            width: "100 %",
          }}
        >
          Add something
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
                <label htmlFor="title">
                  {/* <b className="textInput">title</b> */}
                </label>
                <input
                  id="text"
                  type="text1"
                  placeholder="Enter your title"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />

                <label htmlFor="img">
                  {/* <b className="textInput">img</b> */}
                </label>
                <input
                  type="text1"
                  placeholder="Enter img"
                  name="img"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.img}
                />
                <label htmlFor="desc">
                  {/* <b className="textInput">Description</b> */}
                </label>
                <input
                  id="text"
                  type="text1"
                  placeholder="Description"
                  name="desc"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.desc}
                />

                <button type="submit">Add</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default postUploader;
