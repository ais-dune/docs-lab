// docs-lab/scripts/sync-img.js

const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, '../shared/img');

// 복사 대상 상품 리포지터리 경로 설정
const targets = [
  path.resolve(__dirname, '../../static/img/common'),
  // path.resolve(__dirname, '../../docs-vi/static/img/shared'),
  // 다른 상품 리포지터리도 필요시 추가
];

// 소스 디렉터리 읽기
if (!fs.existsSync(sourceDir)) {
  console.error(`❌ Source directory not found: ${sourceDir}`);
  process.exit(1);
}

// 각 대상 디렉터리에 복사
for (const targetDir of targets) {
  fs.mkdirSync(targetDir, { recursive: true });

  const files = fs.readdirSync(sourceDir);
  for (const file of files) {
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(targetDir, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Copied ${file} → ${destPath}`);
  }
}

console.log('\n🟢 All shared images synced');