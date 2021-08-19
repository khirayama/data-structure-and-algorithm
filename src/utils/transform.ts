import * as fs from 'fs';
import * as path from 'path';

import grayMatter from 'gray-matter';

/* :quotetoc - :quotetoc(/path) */
function transformQuoteToc(markdown: string) {
  const regexp = /\:quotetoc\((.*)\)/;

  let result = regexp.exec(markdown);
  while (result) {
    const key = result[1];
    const mdPath = path.join(process.cwd(), 'docs', key + '.md');
    const doc = fs.readFileSync(mdPath, { encoding: 'utf-8' });
    const { data, content } = grayMatter(doc);
    const transformedContent = transform(content);
    const toc = transformedContent
      .split('\n')
      .filter((l) => l.indexOf('#') === 0)
      .filter((l) => l.indexOf('## 目次') !== 0)
      .map((l) => {
        if (l.indexOf('## ') === 0) {
          const c = l.replace('## ', '');
          return `- [${c}](${key}#${c})`;
        } else if (l.indexOf('### ') === 0) {
          const c = l.replace('### ', '');
          return `  - [${c}](${key}#${c})`;
          // } else if (l.indexOf('## ') === 0) {
          //   return l.replace('## ', '- ');
        }
      });

    // let internalLinks = Array.from(new Set(transformedContent.match(/\[.*\]\(\/.*\)/g) || []));

    markdown = markdown.replace(
      regexp,
      `
## ${data.title}

${toc.join('\n')}`,
    );
    result = regexp.exec(markdown);
  }
  return markdown;
}

/* :toc */
function transformTOC(markdown: string) {
  const regexp = /\:toc/;
  const heading = '## 目次';
  const toc = markdown
    .split('\n')
    .filter((line) => line.indexOf('#') === 0)
    .map((line) => {
      if (line.indexOf('## ') === 0) {
        const c = line.replace('## ', '');
        return `- [${c}](#${c})`;
      } else if (line.indexOf('### ') === 0) {
        const c = line.replace('### ', '');
        return `  - [${c}](#${c})`;
      }
      return line;
    });
  let result = regexp.exec(markdown);
  while (result) {
    markdown = markdown.replace(regexp, [heading, ...toc].join('\n'));
    result = regexp.exec(markdown);
  }
  return markdown;
}

export function transform(markdown: string) {
  markdown = transformQuoteToc(markdown);
  markdown = transformTOC(markdown);
  return markdown;
}
