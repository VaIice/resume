function Database() {
 return (
   <div className='project-section'>
       <h3>OTT 플랫폼 통합 DB<span className="highlight">.</span></h3>
       코로나19로 인한 OTT 서비스의 인기가 높아지면서 사용자가 원하는 콘텐츠를 찾기 어려운 문제를 해결하기 위해, <span className="highlight">OTT 플랫폼 통합 DB</span>를 구축하였습니다.
       이 프로젝트는 사용자가 콘텐츠를 검색할 때 어느 플랫폼에서 제공되는지 빠르게 확인할 수 있도록 하고, 각 플랫폼의 콘텐츠를 한 곳에서 볼 수 있게 하는 것을 목표로 했습니다.<br/><br/>

       TMDB API를 활용하여 <span className="highlight">Python</span>으로 영화, TV 프로그램, 인물 정보를 수집하고, <span className="highlight">MySQL</span>로 통합 DB 시스템을 완성했습니다.
       이 시스템을 통해 사용자들은 여러 플랫폼을 직접 확인할 필요 없이 원하는 콘텐츠를 쉽게 찾고, 맞춤화된 추천 서비스를 통해 새로운 콘텐츠를 발견할 수 있습니다.
       <h5>작업 기간<span className="highlight">.</span></h5><span>2023.05</span>
      <h5>주요 기능<span className="highlight">.</span></h5><span>플랫폼 정보 확인, 콘텐츠 상세 정보 제공, 맞춤형 추천 서비스</span>
      <h5>Github<span className="highlight">.</span></h5><span><a href="https://github.com/VaIice/OTT">https://github.com/VaIice/OTT</a></span>
      <h5>Tech Stack<span className="highlight">.</span></h5><span>TMDB API, Python, MySQL</span>
</div>
   )
}

export default Database;