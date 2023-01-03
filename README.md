# @z1c1/remark-directive-custom-dataset-tag-plugin

[![npm package](https://img.shields.io/npm/v/@z1c1/remark-directive-custom-dataset-tag-plugin.svg)](https://www.npmjs.org/package/@z1c1/remark-directive-custom-dataset-tag-plugin)
[![npm download](https://img.shields.io/npm/dt/@z1c1/remark-directive-custom-dataset-tag-plugin.svg)](https://www.npmjs.org/package/@z1c1/remark-directive-custom-dataset-tag-plugin)
![github language top](https://img.shields.io/github/languages/top/@z1c1/remark-directive-custom-dataset-tag-plugin.svg)
[![github stars](https://img.shields.io/github/stars/@z1c1/remark-directive-custom-dataset-tag-plugin.svg?style=social&label=Stars)](https://github.com/@z1c1/remark-directive-custom-dataset-tag-plugin)  

[![NPM](https://nodei.co/npm/@z1c1/remark-directive-custom-dataset-tag-plugin.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@z1c1/remark-directive-custom-dataset-tag-plugin)

A remark plugin which helps create a custom html tag with specified dataset. This works together with `remark-directive`.

## Usage

```sh
npm install --save @z1c1/remark-directive-custom-dataset-tag-plugin
```

```js
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkDirectiveCustomDatasetTagPlugin from '@z1c1/remark-directive-custom-dataset-tag-plugin';

// markdown text to html parser
const parseMarkdown = raw =>
  unified()
  .use(remarkParse)
  .use(remarkDirective)
  .use(remarkDirectiveCustomDatasetTagPlugin, { name: 'CUSTOM_NAME', class: 'custom-tag' })
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeStringify, { allowDangerousHtml: true })
  .processSync(raw)
  .toString();
```

## Start

```sh
# eg. preparations
npm install

# eg. build the project
npm run build

# eg. test
npm test

# eg. release
npm run release
```

## Contributing

[How to contribute to this?](CONTRIBUTING.md)

## Recently changes

See the [change log](CHANGELOG.md).

## License

[MIT](LICENSE)
