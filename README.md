2023년 한양대학교 컴퓨터소프트웨어학부 졸업 프로젝트

# Soul Ticket
Soulbound Token 인터페이스를 활용한 암표 거래 방지 티켓팅 서비스, **Soul Ticket**

## Blockchain
블록체인은 분산원장 기술을 기반으로 하는 기술로, 다음과 같은 장점을 가지고 있습니다.

- 분산원장: 블록체인은 중앙 서버 없이 분산된 네트워크에서 원장을 공유합니다. 이는 원장의 신뢰성을 높이고, 중앙 서버의 해킹이나 오류로 인한 피해를 최소화할 수 있습니다.
- 투명성: 블록체인은 모든 거래 내역이 공개되어 투명합니다. 이는 거래의 신뢰성을 높이고, 거래 당사자 간의 분쟁을 최소화할 수 있습니다.
- 보안성: 블록체인은 암호화폐를 사용하여 거래를 인증하기 때문에 보안성이 높습니다. 이는 거래의 안전성을 보장하고, 불법적인 거래를 방지할 수 있습니다.
- 비용 절감: 블록체인은 중앙 서버를 운영하지 않기 때문에 비용이 저렴합니다. 이는 기업의 운영 비용을 절감하고, 사용자의 부담을 줄일 수 있습니다.

## Soublund Token(SBT, EIP-5192)
이더리움 EIP-5192 소울바운드 토큰(Soulbound Token)은 토큰의 소유권을 강화하는 기능을 제공합니다.
- 영구적 소유권: 소울바운드 토큰은 블록체인 지갑에 귀속되어 영원히 소유권이 유지됩니다.
- 용도: 소울바운드 토큰은 다양한 용도로 사용될 수 있습니다. 예를 들어, 토큰 소유자의 개인 정보를 저장하거나, 토큰 소유자의 권한을 인증하는 데 사용될 수 있습니다.
- 보안성: 소울바운드 토큰은 지갑에 귀속되기 때문에 보안성이 좋습니다.

## 기술
- **Interface: ERC-1155, IERC-5192(SBT)**
- **Contract: Solidity**
- **Solidity Compiler: Hardhat**
- **Web Framework: Next.js**
- **Distribution: Vercel SaaS (Vercel)**
- **Stroage: Vercel Postgres, Vercel Blob**

## Vercel 배포 주소
https://2023-hanyang-graduation-project.vercel.app/

## 스크린샷

### 메인 화면
![메인화면](https://github.com/2023HanyangGraduationProject/web/assets/26588950/fdfe1cf0-2234-45c0-adb9-b0ef139b0489)

### 등록 화면
![메인화면](https://github.com/2023HanyangGraduationProject/web/assets/26588950/975bd71b-fb9d-48a0-9cd2-47c2ba8fb7c3)

### 콜렉션 모음 화면
![메인화면](https://github.com/2023HanyangGraduationProject/web/assets/26588950/06c8a6f0-15ec-4118-93f2-3642e9bb02b3)

### 단일 콜렉션 화면
![메인화면](https://github.com/2023HanyangGraduationProject/web/assets/26588950/71fd4522-8375-4185-9c3e-c7d98a71023e)

### 상품 화면
![메인화면](https://github.com/2023HanyangGraduationProject/web/assets/26588950/aaa832fa-c25b-4548-aa47-b281972dde0f)

### 컨택트 화면
![컨택트 화면](https://github.com/2023HanyangGraduationProject/web/assets/26588950/5ef706a1-bcbf-42a6-859d-42d1dad1c9b0)
