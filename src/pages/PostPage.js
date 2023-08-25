import Tag from "../components/Tag";

const PostPage = () => {
  return (
    <div className="PostPage">
      메인 페이지
      {/* 태그예시 */}
      <Tag text="기본" />
      <Tag text="기본" type="disabled" />
    </div>
  );
};

export default PostPage;
