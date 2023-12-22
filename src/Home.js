import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

function Home({ isLoading, fetchError }) {
  const posts = useStoreState((state) => state.searchResults);

  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className="statusMsg">No posts to display.</p>
        ))}
    </main>
  );
}

export default Home;
