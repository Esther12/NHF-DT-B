import { connect } from "react-redux";
import { createWorship } from "../actions";
import NewPost from "../components/Worship";

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createWorship(post));
    }
  };
};

export default connect(null, mapDispatchToProps)(NewPost);
