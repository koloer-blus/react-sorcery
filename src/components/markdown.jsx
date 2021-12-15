import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import useDocumentTitle from 'hooks/useDocumentTitle'
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import mdData from '../registry';

const MarkDown = (props) => {
  const { pageKey } = props;

  useDocumentTitle(mdData[pageKey].title || 'ReadME')
  return (
    <ReactMarkdown
      children={mdData[pageKey].content || ''}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={atomDark}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
        }
      }}
    />
  )
}

export default MarkDown;