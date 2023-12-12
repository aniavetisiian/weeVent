import React, { useState } from "react";
import SimpleModal from "../../UI/modal/Modal";
import PostUploader from "./postUploader/PostUploader";
import MyCard from "./Card/Card";
import "./Cards.css";

const Cards = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const body = <PostUploader submit={props.submit} />;

  const posts =
    props.data.length > 0 ? (
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
      <div className="noPost">
        <p>Հրապարակումներ չկան։ Ավելացրեք։</p>
      </div>
    );

  return (
    <div className="cardsContainer">
      <div className="postsContainer">{posts}</div>

      <div className="addPost">
        <p className="para" onClick={handleOpen}>
          Ավելացնել
        </p>
        <SimpleModal handleClose={handleClose} open={open} body={body} />
      </div>
    </div>
  );
};

export default Cards;
