import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Contact } from '../Component/Contact';
import logo1 from '../Resources/img/1.jpg';
import logo2 from '../Resources/img/2.jpg';
import logo3 from '../Resources/img/3.jpg';
import logo5 from '../Resources/img/5.jpg';
import logo6 from '../Resources/img/6.jpg';
import maincover from '../Resources/img/main-cover.png';
let ProjectPage = () => {
  return (
    <Fragment>
      <div className="cover-page">
        <div className="tit">
          <h1>Project</h1>
          <ul className="breadcrumb">
            <li>
              <NavLink
                className={(props) => (props.isActive ? 'active' : '')}
                to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/project">project</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <section id="project">
        <div className="flex project pt-30">
          <Contact title="project title can be here" src={logo1}/>
          <Contact title="project title can be here" src={logo2}/>
          <Contact title="project title can be here" src={logo3}/>
        </div>
        <div className="flex project pt-30">
        <Contact title="project title can be here" src={logo5}/>
          <Contact title="project title can be here" src={logo6}/>
          <Contact title="project title can be here" src={logo2}/>
        </div>
        <div className="flex project pt-30">
        <Contact title="project title can be here" src={maincover}/>
          <Contact title="project title can be here" src={logo6}/>
          <Contact title="project title can be here" src={logo5}/>
        </div>
        <div className="flex project pt-30">
        <Contact title="project title can be here" src={logo1}/>
          <Contact title="project title can be here" src={logo2}/>
          <Contact title="project title can be here" src={logo3}/>
        </div>
        <div className="flex project">
        <Contact title="project title can be here" src={logo5}/>
          <Contact title="project title can be here" src={logo6}/>
          <Contact title="project title can be here" src={logo2}/>
        </div>
      </section>
    </Fragment>
  );
};
export default ProjectPage;
