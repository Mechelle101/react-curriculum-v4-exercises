import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');

  const handleGetPost = async () => {
    try {
      setError('');
      const data = await getSinglePost();
      setPost(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleGetPost}>
        Get post
      </button>
      <div className="content">
        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
        {post && (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}
