import React, { useState } from 'react';
import { CommentsWrapper, LoadMore } from './styled';
import CommentItem from './comment-item/comment-item';
import CommentForm from './comment-form/comment-form';
import CloseIcon from '../icons/close-icon';

function Comments() {
  const [newComment, setNewComment] = useState('');
  const [replication, setReplication] = useState({ to: '', mark: false });

  return (
    <CommentsWrapper>
      <CommentForm
        comment={newComment}
        onChange={setNewComment}
        replication={replication}
        onReplicationCancel={() => setReplication({ to: '', mark: false })}
      />

      {Array.from({ length: 10 }, (_, key) => (
        <CommentItem
          key={key}
          onReply={setReplication}
        />
      ))}

      <LoadMore>
        <CloseIcon width="18" height="18" />
      </LoadMore>
    </CommentsWrapper>
  );
}

export default Comments;
