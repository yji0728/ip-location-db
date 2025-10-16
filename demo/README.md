# IP 국가명 조회 웹 앱

순수 JavaScript로만 만든 IP 주소 국가명 조회 웹 애플리케이션입니다.

## 특징

- ✅ **순수 JavaScript**: 프레임워크나 라이브러리 없이 순수 JavaScript로 구현
- ✅ **Zero Dependencies**: 외부 의존성 없음
- ✅ **실시간 조회**: IP 주소를 입력하면 즉시 국가명 조회
- ✅ **빠른 검색**: 이진 탐색 알고리즘으로 빠른 검색
- ✅ **사용하기 쉬운 UI**: 직관적이고 반응형 사용자 인터페이스
- ✅ **한글 지원**: 한국어로 국가명 표시

## 사용 방법

### 웹 브라우저에서 실행

1. `index.html` 파일을 웹 브라우저로 엽니다.
2. IP 주소를 입력하고 "조회" 버튼을 클릭합니다.
3. 또는 예제 IP 버튼을 클릭하여 빠르게 테스트할 수 있습니다.

### 로컬 서버로 실행 (권장)

```bash
# Python 3을 사용하는 경우
cd demo
python3 -m http.server 8000

# Python 2를 사용하는 경우
cd demo
python -m SimpleHTTPServer 8000

# Node.js http-server를 사용하는 경우
cd demo
npx http-server -p 8000
```

그런 다음 브라우저에서 `http://localhost:8000` 으로 접속합니다.

## 파일 구조

```
demo/
├── index.html      # 메인 HTML 파일
├── style.css       # 스타일시트
├── ip-lookup.js    # IP 조회 로직 (핵심 모듈)
├── app.js          # 애플리케이션 로직
└── README.md       # 이 파일
```

## 기술 스택

- **HTML5**: 구조 및 마크업
- **CSS3**: 스타일링 및 반응형 디자인
- **Vanilla JavaScript**: 모든 로직 구현

## 구현 세부사항

### IP 조회 알고리즘

1. **데이터 로딩**: CDN에서 IP-국가 데이터베이스 CSV 파일을 가져옵니다.
2. **IP 변환**: IP 주소를 숫자로 변환하여 비교합니다.
3. **이진 탐색**: O(log n) 시간 복잡도로 IP 범위를 찾습니다.
4. **결과 반환**: 국가 코드와 한글 국가명을 반환합니다.

### 데이터 소스

이 애플리케이션은 `@ip-location-db/asn-country` 데이터베이스를 사용합니다:
- **URL**: https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country/asn-country-ipv4.csv
- **라이선스**: CC0-1.0 (Public Domain)
- **업데이트**: 매일
- **출처**: [ip-location-db](https://github.com/sapics/ip-location-db)

## 주요 기능

### IPLookup 클래스

```javascript
const ipLookup = new IPLookup();

// IP 조회
const result = await ipLookup.lookup('8.8.8.8');
// 결과: { ip, countryCode, countryName, range }
```

### 메서드

- `loadDatabase()`: CSV 데이터베이스를 로드합니다.
- `lookup(ip)`: IP 주소의 국가 정보를 조회합니다.
- `isValidIP(ip)`: IP 주소 유효성을 검사합니다.
- `getCountryName(code)`: 국가 코드를 한글 국가명으로 변환합니다.

## 브라우저 호환성

- ✅ Chrome (최신)
- ✅ Firefox (최신)
- ✅ Safari (최신)
- ✅ Edge (최신)
- ⚠️ IE11 (Fetch API 폴리필 필요)

## 제한사항

- IPv4 주소만 지원합니다.
- 인터넷 연결이 필요합니다 (데이터베이스 로딩).
- 첫 조회 시 데이터베이스 로딩으로 약간의 지연이 있을 수 있습니다.

## 프로덕션 환경

프로덕션 환경에서는 자동으로 CDN에서 전체 데이터베이스를 로드합니다:
- **데이터베이스 크기**: 약 4MB (IPv4)
- **로딩 시간**: 약 1-3초 (첫 로드 시)
- **IP 범위**: 전체 IPv4 주소 공간

`sample-data.csv`는 오프라인 테스트용이며, 실제 운영 환경에서는 CDN의 전체 데이터베이스가 사용됩니다.

## 라이선스

이 웹 애플리케이션은 공개 도메인입니다. 자유롭게 사용, 수정, 배포할 수 있습니다.

사용된 IP 데이터베이스는 CC0-1.0 라이선스입니다.

## 기여

버그 리포트나 개선 제안은 언제나 환영합니다!

## 관련 링크

- [ip-location-db 프로젝트](https://github.com/sapics/ip-location-db)
- [데이터베이스 NPM 패키지](https://www.npmjs.com/package/@ip-location-db/asn-country)
