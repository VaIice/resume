function Lease() {
 return (
  <div className='project-section'>
    <h3>농기계 임대 사업소 (1人 프로젝트)<span className="highlight">.</span></h3>
     전국 <span className="highlight">농기계 임대 사업소 정보</span>를 제공하는 웹 사이트입니다.
     기존에 여러 사이트에 분산된 사업소 정보를 한 곳에 모아 연세가 있으신 사용자분들도 쉽게 접근하실 수 있도록 이 사이트를 만들었습니다.<span className="br"><br/><br /></span>
     
     <span className="highlight">Redux</span>를 사용하여 상태 관리를 구현했습니다. 사용자는 지역 설정을 통해 농기계 임대 사업소를 검색할 수 있으며, 카카오 맵 API를 이용해 사업소 위치를 표시했습니다.
     또한, <span className="highlight">카카오 맵 API</span>의 다양한 기능을 활용하여 지도 기반의 길찾기 등 UX를 개선하는 기능도 구현했습니다.<br /><br />
     
     이 프로젝트를 통해 외부 API와 공공 데이터를 활용하는 경험을 쌓을 수 있었습니다.
     또한, UX 개선을 위해 사용자 데이터 시각화 등 데이터 분석 역량도 키울 수 있었습니다.
     <h5>작업 기간<span className="highlight">.</span></h5><span>2024.04</span>
     <h5>주요 기능<span className="highlight">.</span></h5><span>농기계 임대 사업소 지도 표시, 상세 정보 제공, 카카오 지도 길찾기</span>
    <h5>Github<span className="highlight">.</span></h5><span><a href="https://github.com/VaIice/lease">https://github.com/VaIice/lease</a></span>
    <h5>URL<span className="highlight">.</span></h5><span><a href="https://vaiice.github.io/lease">https://vaiice.github.io/lease</a></span>
    <h5>Tech Stack<span className="highlight">.</span></h5><span>React, Redux (Redux-toolkit), Kakao Maps API, Figma</span>
  </div>
   )
}

export default Lease;