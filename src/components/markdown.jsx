import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import useDocumentTitle from 'hooks/useDocumentTitle'
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "../style/eloquent.css";

import mdData from '../registry';
import routes from '../route.config.json';
import { Link } from 'react-router-dom';

const MarkDown = (props) => {
  const { pageKey } = props;

  useDocumentTitle(mdData[pageKey].title || 'ReadME')
  return (
    <ReactMarkdown
      children={mdData[pageKey].content || ''}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        a({ node, children, href, ...props }) {
          if (href[0] === '.') {
            const res = routes.pages.find(page => {
              return decodeURI(page.filePath) === decodeURI(href)
            });
            if (res) {
              return <Link {...props} to={res.path} >{children}</Link>
            }
          }
          return <a {...props} href={href}>{children}</a>
        },
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={atelierDuneLight}
              language={match[1]}
              PreTag="div"
              showLineNumbers
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
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