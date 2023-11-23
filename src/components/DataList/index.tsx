import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slices/dataSlice";
import { RootState } from "../../redux/store";

const DataList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    console.log("fetching data");
  }, [dispatch]);

  const { posts, error, isLoading } = useSelector(
    (state: RootState) => state.posts
  );

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>Error while fetching data! Please, try again later...</h1>;
  }

  return (
    <ul className="bg-red-200">
      {posts.map((post) => (
        <li key={post.id}>
          <h3 className="text-xl font-bold uppercase text-center ">
            {post.title}
          </h3>
          <p>{post.body}</p>

          <hr />
        </li>
      ))}
    </ul>
  );
  // return <div>Data</div>;
};

export default DataList;
