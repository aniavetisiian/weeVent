import React from "react";
import SimpleModal from "../../UI/modal/Modal";
import "./Cards.css";
import PostUploader from "./postUploader/PostUploader";
import MyCard from "./Card/Card";

const Cards = (props) => {

  const [open, setOpen] = React.useState(false);
  // const [rot, setRotate] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = <PostUploader submit={props.submit} />;

  const posts = props.data.length ? (
    props.data.map((data) => (
      <MyCard
        key={data._id}
        img={data.imgUrl}
        title={data.title}
        desc={data.description}
        date={data.data}
      />
    ))

  ) : (
    <div
      style={{
        width: 280,
        height: 400,
        backgroundColor: "white",
        margin: 10,
        textAlign: "center",
      }}
    >
      <h1>There is no post. Add!</h1>
    </div>
  );
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          overflow: "auto",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            paddingLeft: 120,
            display: "flex",
            flexWrap: "nowrap",
          }}
        >
          {posts}
        </div>
      </div>

      <div
        style={{ width: 700, height: 500, marginLeft: 400 }}
        className="addPost"
      >
        <p className="para" onClick={handleOpen}>
          Add
        </p>
        <SimpleModal handleClose={handleClose} open={open} body={body} />
      </div>
    </div>
  );
};

export default Cards;
