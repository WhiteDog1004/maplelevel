# 레벨지지 - 메이플랜드 사냥터 공유 사이트

[레벨지지](https://maplelevel.gg)

**Nextjs15 App Router로 개발한 CRUD 동적 사이트입니다.**

메이플랜드 게임 내에서 유저들이 사냥터 정보를 활발히 공유하는 모습에서 아이디어를 얻어 개발한 사이트입니다.<br/>
직업과 레벨 필터를 적용하여, 사용자가 자신의 조건에 맞는 사냥터를 손쉽게 검색할 수 있도록 구현하였습니다.

---

## 🛠️ 기술 스택

| Category      | Technologies                                                                                                                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Core** | ![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js) ![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript) |
| **Styling** | ![MUI](https://img.shields.io/badge/MUI-6-cyan?style=for-the-badge&logo=MUI)                                                                               |
| **State** | ![Zustand](https://img.shields.io/badge/Zustand-black?style=for-the-badge&logo=zustand) ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)                                                                                                                                                                            |
| **Data** | ![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-orange?style=for-the-badge&logo=tanstack) ![Supabase](https://img.shields.io/badge/Supabase-green?style=for-the-badge&logo=supabase)                                                                      |
| **Tooling** | ![Biome JS](https://img.shields.io/badge/Biome_JS-blue?style=for-the-badge&logo=biome)                                                                            |

---

## ✨ 주요 기능

### 1. Header - Supabase에서 지원하는 Auth를 활용한 로그인/로그아웃 연동 구현
- Supabase Auth를 활용하여 로그인/로그아웃 및 세션 관리 구현했습니다.

### 2. 사냥터 리스트 & 사냥터 추천하기 - 유저들이 직접 참여하여 게시글을 작성하고 확인할 수 있는 CRUD 페이지
- 게시글 CRUD 기능을 구현하여, 유저가 직접 사냥터를 등록·수정·삭제 가능하도록 했습니다.
- 검색 및 필터링 기능을 제공하여 원하는 사냥터 정보를 빠르게 탐색이 가능합니다.
- 로그인 상태에서만 접근 가능한 추천(Add) 페이지를 통해 인증된 유저만 게시글 작성이 가능 합니다.

### 3. 사냥터 빠른 검색 - 맞춤형 사냥터 추천 페이지
- 게시글 데이터 중 원하는 사냥터를 검색하여, 직업별로 필터링된 리스트를 제공합니다.
