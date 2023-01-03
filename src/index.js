import { visit } from 'unist-util-visit';

function RemarkDirectiveCustomDatasetTagPlugin(options) {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== options.name) {
          return;
        }

        const data = node.data || (node.data = {});
        const attributes = node.attributes || {};

        const dataSet = Object.entries(attributes).reduce((acc, [key, val]) => {
          const dataKey = `data-${key.replace(/([A-Z])/g, (_, $1) => `-${$1.toLowerCase()}`)}`;
          if (!acc[dataKey]) {
            acc[dataKey] = val;
          } else if (Array.isArray(acc[dataKey])) {
            acc[dataKey].push(val);
          } else {
            acc[dataKey] = [acc[dataKey], val];
          }
          return acc;
        }, {});

        data.hName = options?.tagName || 'code';
        data.hProperties = {
          'data-custom-name': options.name,
          ...dataSet,
          class: options?.class || '',
          style: options?.style || '',
        };
      }
    });
  };
}

export default RemarkDirectiveCustomDatasetTagPlugin;
