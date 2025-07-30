
# 공통 Asset 안내 

## ref

참조용 파일

## scripts

* `sync-theme.js`: 컴포넌트 전역 선언(`MDXCompoments.js`) 자동 복사 및 배치

    * docs-lab으로 이동 후 node scripts/sync-theme.js 실행

## shared/components

* `Status`

    * 릴리스 항목 내 우선 순위 설정

    * 전역 선언

* New Features 내 리스트 재배치

    * `ChangelogComponent`

    * `CustomListItem`

## shared/css

`custom.scss`를 alias로 사용합니다. 상품별 `docusaurus.config.js`에서 css 경로를 수정하세요. 

## shared/img, shared/icons

### 정적 자산 배치 

공통으로 사용하는 이미지 관리 디렉터리입니다. 자동 복사 스크립트를 통해 실제 상품 리포지터리에 복사하는 방식을 권장합니다. Docusaurus 내 설정 시 필요한 일부 이미지(즐겨찾기 아이콘 등)의 경우 alias로 가져올 수 없습니다. 

### 마크다운 문서 내 적용 방식

:::note

이미지와 같은 정적 자산의 경우 alias로 가져오는 방식을 권장하지 않습니다.

:::

#### png 형식

```
import testIndex from '@shared/img/main_index.png';

<img src={testIndex} />
```

#### svg 형식

공통 아이콘의 경우 리액트 컴포넌트 방식으로 사용합니다. 

```
import Logo from '@shared/icons/ic-link.svg';

<Logo />
```
