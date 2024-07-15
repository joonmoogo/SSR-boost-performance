[Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# 프로젝트 구성 및 최적화 전략

## 데이터베이스 구성
- **Vercel Storage**:
  - **Postgres**: 데이터 관리를 위한 주요 데이터베이스로 활용
  - **Blob**: 이미지 및 파일 저장소로 사용

### 데이터베이스 최적화
- 파일 DB와 데이터 DB를 분리하여 속도 최적화

## 프론트엔드 최적화
- **App Router**: 효율적인 라우팅을 통해 사용자 경험 개선
- **SEO 최적화**:
  - 메타 태그 동적 생성
  - 서버사이드 렌더링 (SSR)
  - 정적 사이트 동적 생성 (ISR)
- **컴포넌트 분리**:
  - 서버 컴포넌트와 클라이언트 컴포넌트를 분리하여 초기 렌더링 및 로직 최적화

    ```jsx
    <ServerComponent>
        <ClientComponent />
    </ServerComponent>
    ```

## 배포 및 CI/CD
- **GitHub Actions**:
  - `dev` 브랜치에서 테스트 코드 통과 후 `main` 브랜치에 병합
  - Vercel을 통해 자동 배포

## 사용자 경험 및 성능 개선
- **Infinite Scroll**:
  - 초기 로딩 최적화 및 UX 개선
- **상태 관리**:
  - Context API에서 Recoil로 변경하여 로직 단순화
- **데이터베이스 마이그레이션**:
  - SQLite3에서 Vercel Postgres로 마이그레이션하여 데이터 안정성 및 보안 개선
- **파일 저장 로직 개선**:
  - 서버 디렉토리에 파일을 저장하는 대신 Vercel Blob을 사용하여 클라우드에 저장, DB 속도 개선
- **모바일 및 PC UI 분리**:
  - 페이지 미들웨어에서 헤더에 `User-Agent`를 넣어 클라이언트의 모바일 UI와 PC UI 분리

