import HeaderMenu from "../Menu/HeaderMenu";
import arrow from "../../images/Arrow.png";

function BlogPage() {
  return (
    <div className="App">
      <HeaderMenu />
      <div className="blog-page">
        <div className="half">
          <img className="arrow arrow-one" src={arrow} alt="Arrow" />
          <h1>
            <a href="https://ko-fi.com/tristangray/posts">Link to Blog</a>
          </h1>
          <img className="arrow arrow-two" src={arrow} alt="Arrow" />
          <br/>
          <a href='https://ko-fi.com/post/GenAI-is-Coming-for-Your-Brain-A0A11FFDY2'>Gen AI is coming for your brain</a>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
