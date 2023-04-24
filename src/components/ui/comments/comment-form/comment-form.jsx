import React, { useEffect, useRef } from 'react';
import { Buttons, Form, Replication, ResetButton, TextField } from './styled';
import Button from '../../button/button';
import TextButton from '../../text-button/text-button';
import CloseIcon from '../../icons/close-icon';

function CommentForm({ comment, onChange, replication, onReplicationCancel }) {
  const ref = useRef(null);

  useEffect(() => {
    if (replication.mark) {
      ref.current.textContent = `@${replication.to}`;
    }
  }, [replication]);

  const handleCancelButtonClick = () => {
    onReplicationCancel();
    ref.current.textContent = '';
  };

  const handleTextChange = (evt) => {
    onChange(evt.currentTarget.textContent);
    if (evt.currentTarget.textContent === '') {
      onReplicationCancel();
    }
  };

  return (
    <Form>
      {replication.to &&
        <Replication>
          {`Ответ ${replication.to}`}
          <TextButton
            clr="#b2b2b2"
            onClick={handleCancelButtonClick}
          >
            <CloseIcon width="16" height="16" />
          </TextButton>
        </Replication>
      }
      <TextField
        ref={ref}
        contentEditable
        tabIndex={0}
        onInput={handleTextChange}
      />

      {comment &&
        <Buttons>
          <ResetButton
            onClick={handleCancelButtonClick}
            type="reset"
          >
            Отменить
          </ResetButton>
          <Button type="submit">Оставить комментарий</Button>
        </Buttons>}
    </Form>
  );
}

export default CommentForm;
