import {createSelector} from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { posts,fetchPosts,status } from "./postSlice";
import { useCallback } from "react";

export const usePostsSelector = () => {
    const selectorPosts = createSelector(posts, (posts) => posts)
    return useSelector(selectorPosts);
}

export const useFetchPost = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(fetchPosts())
    },[dispatch])
}

export const usePostStatus = () => {
    const selectorStatus = createSelector(status, (status)=> status);
    return useSelector(selectorStatus)

}