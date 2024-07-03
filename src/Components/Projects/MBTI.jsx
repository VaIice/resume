function MBTI() {
 return (
  <div className='project-section'>
    <h3>로스트아크 MBTI 성향 테스트 (1人 프로젝트)<span className="highlight">.</span></h3>
     로스트아크를 테마로 한 <span className="highlight">MBTI 성향 테스트 사이트</span>로, 개인의 MBTI 결과에 따라 게임 내 성향을 알려주는 사이트입니다.<br/><br/>
     
     웹 개발에 대해 처음으로 자세히 공부하면서 <span className="highlight">HTML</span>부터 시작하여 <span className="highlight">JavaScript</span>와 <span className="highlight">React</span>를 포함한 다양한 기술을 배우고 활용하기 위해 수행한 프로젝트입니다.
     React Hooks을 이용해 프로토 타입을 개발했지만, 유지보수 관점에서 Redux의 필요성을 느껴 리팩토링하였습니다.
     
     많은 사용자들이 이용할 것으로 예상되어 Google Analytics, Google Search Console을 이용해 트래픽 추적 및 검색 결과 노출을 관리했습니다.
    <h5>주요 기능<span className="highlight">.</span></h5><span>MBTI 테스트, 개인의 MBTI 결과에 따른 게임 내 성향 제시</span>
    <h5>Github<span className="highlight">.</span></h5><span><a href="https://github.com/VaIice/mbti">https://github.com/VaIice/mbti</a></span>
    <h5>URL<span className="highlight">.</span></h5><span><a href="https://vaiice.github.io/mbti">https://vaiice.github.io/mbti</a></span>
    <h5>Tech Stack<span className="highlight">.</span></h5><span>React, Redux (Redux-toolkit), Kakao API, Figma</span>
  </div>
   )
}

export default MBTI;