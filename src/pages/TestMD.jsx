
    // 测试文档.md
    import * as React from 'react';
    import useDocumentTitle from 'hooks/useDocumentTitle';

    const TestMD = () => {
        useDocumentTitle("测试文档");
        return (
          <React.Fragment>
            <h1>hello world</h1>

          </React.Fragment>
        );
      };

    export default TestMD;
  