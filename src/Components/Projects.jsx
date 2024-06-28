import Capstone from "./Projects/Capstone";
import Lease from "./Projects/Lease";
import MBTI from "./Projects/MBTI";
import TVING from "./Projects/TVING";

function Projects() {
 return (
    <section>
         <h2>Project<span className="highlight">.</span></h2>
         {/* <TVING/> */}
         <Lease/>
         <MBTI />
         <Capstone/>
</section>
 )
}

export default Projects;