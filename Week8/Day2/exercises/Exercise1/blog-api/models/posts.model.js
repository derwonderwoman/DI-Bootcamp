import {db} from "../config/data.js";

export const _getAllPosts = () => {
  return db`SELECT "id", "title", "content" FROM posts`;
};

export const _getPostById = (post_id) => {
  return db`SELECT "id", "title", "content" FROM posts where id = ${post_id}`;
};

export const _createPost = (title, content) => {
    return db`INSERT INTO posts ("title", "content") VALUES (${title}, ${content}) RETURNING "id", "title", "content"`;
  };

export const _deletePost =(post_id) => {
    return db`DELETE FROM posts delete where id = ${post_id}`;
}

export const _updatePost = (post_id, new_title, new_content) => {
    return db`UPDATE posts").update (${new_title}, content:${new_content} where id = ${post_id}`;
}
