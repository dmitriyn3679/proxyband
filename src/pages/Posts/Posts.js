import {PostsList} from "../../components/PostsList";
import {useSearchParams} from "react-router-dom";

export const Posts = () => {
  const [searchParams] = useSearchParams();
  
  const userId = searchParams.get('userId');
  
  return (
    <PostsList userId={userId} />
  );
}
