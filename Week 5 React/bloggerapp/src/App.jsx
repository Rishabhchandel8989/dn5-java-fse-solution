/*------------ Hands-on 13 ------------------------*/

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  // Method 1: if...else
  if (!showBooks) {
    return <h2>No Data Available</h2>;
  }

  // Method 2: Element Variable
  let blogComponent = null;

  if (showBlogs) {
    blogComponent = <BlogDetails />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogger App</h1>

      {/* Method 3: Direct Component */}
      <BookDetails />

      <hr />

      {/* Method 2: Element Variable */}
      {blogComponent}

      <hr />

      {/* Method 4: Logical AND */}
      {showCourses && <CourseDetails />}
    </div>
  );
}

export default App;