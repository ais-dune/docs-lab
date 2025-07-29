// docs-cb/docs-lab/scripts/sync-theme.js
const fs = require('fs');
const path = require('path');

const source = path.resolve(__dirname, '../shared/theme/MDXComponents.js');

const targets = [
  path.resolve(__dirname, '../../src/theme/MDXComponents.js'), // docs-cb용
  // 다른 상품 리포지터리도 여기 추가 가능
];

for (const dest of targets) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(source, dest);
  console.log(`✅ Copied to ${dest}`);
}