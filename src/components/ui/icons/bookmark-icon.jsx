import React from 'react';

function BookmarkIcon(props) {
  return (
    <svg width={19} height={14} fill="none" {...props}>
      <path d="m16.293 4.951-2.333-2.8c-.353-.423-.53-.635-.746-.787a2.001 2.001 0 0 0-.632-.295C12.327 1 12.052 1 11.502 1H4.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C1 2.52 1 3.08 1 4.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H11.5c.551 0 .826 0 1.081-.069.226-.06.44-.16.632-.296.216-.152.393-.363.746-.786l2.333-2.8c.608-.729.91-1.093 1.027-1.5.102-.359.102-.74 0-1.098-.116-.407-.42-.77-1.027-1.5Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default BookmarkIcon;
