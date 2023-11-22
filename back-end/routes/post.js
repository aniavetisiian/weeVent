const express = require("express");
const router = express.Router();
const auth = require("./checkToken");
const Post = require("../model/post");

router.get("/", async (req, res) => {
  try {
    const data = await Post.find();
    res.send(data);
  } catch (error) {
    res.status(400).send({ message: "Plase try again" });
    console.log(error);
  }
});

router.get("/post/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Post.findById(id);
    res.send(data);
  } catch (error) {
    res.status(400).send({ message: "Plase try again" });
    console.log(error);
  }
});

router.post("/add", auth, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    imgUrl: req.body.imgUrl,
    userId: req.user,
    desc: req.body.desc,
    author: req.body.author,
  });
  try {
    const data = await post.save();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Something went wrong" });
  }
});

router.delete("/del/:id", auth, async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Post.findById(id);
    if (data.userId == req.user) {
      const datapost = await Post.findByIdAndDelete(id);
      res.send(datapost);
    }
  } catch (error) {
    res.status(400).send({ message: "Plase try again" });
    console.log(error);
  }
});

router.get("/user/:userId", auth, async (req, res) => {
  const userId = req.params.userId;
  try {
    const data = await Post.find({ userId: userId }).populate("userId");
    res.send(data);
  } catch (error) {
    res.status(400).send({ message: "Plase try again" });
    console.log(error);
  }
});

/*
router.patch('/update/:id', auth, async (req, res) => {
    const id = req.params.id
    try {
        const data = await Post.findByIdAndUpdate(id,{$set: {
            title: 'Gyumri'
        }})
        res.send(data)
    } catch (error) {
        res.status(400).send({message: "Plase try again"})
        console.log(error);
    }
})
*/

module.exports = router;
