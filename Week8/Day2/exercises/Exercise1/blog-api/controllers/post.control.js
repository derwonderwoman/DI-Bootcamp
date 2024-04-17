
import {
  _getAllPosts,
  _getPostById,
  _createPost,
  _updatePost,
  _deletePost
} from "../models/posts.model.js";

export const getAllPosts = (req, res) => {
  _getAllPosts()
    .then((data) => {
    res.json(data);
    })
    .catch((e) => {
    res.status(404).json({ msg: "something went wrong" });
    console.log(e);
    });
};

export const getPostById = (req, res) => {
  const { id } = req.params;
  _getPostById(id)
    .then((data) => {
    res.json(data);
    })
    .catch((e) => {
      res.status(404).json({ msg: "something went wrong" });
      console.log(e);
    });
};

export const createPost = (req, res) => {
  const {title, content } = req.body;
  _createPost(title, content)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const updatePost = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    _updatePost(id,title,content)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
  };

export const deletePost = (req, res) => {
    const { id } = req.params;
    _deletePost(id)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
  };
