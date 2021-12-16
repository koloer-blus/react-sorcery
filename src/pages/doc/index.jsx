import * as React from 'react';

import useDocumentTitle from 'hooks/useDocumentTitle'
import MarkDown from './markdown';
import { useDocContext, DOCContextProvider } from './doc-context';

const Doc = (props) => {
  const { pageKey } = props;
  const { title } = useDocContext();
  useDocumentTitle(title);
  return (
    <DOCContextProvider>
      <MarkDown
        pageKey={pageKey}
      />
    </DOCContextProvider>
  )
};

export default Doc;