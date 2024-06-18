import "./Experience.css";
const Experience = () => {
  return (
    <div className="outer-layer">
      <section className="experience pb-100" id="experience">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto text-center">
              <div className="section-title">
                <h4>My Journey So Far</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <ul className="timeline-list">
                <li className="imp-list">
                  <div className="timeline_content">
                    <span>2008</span>
                    <h4>Intern Developer span</h4>
                    <p>
                      We gather your business and products information. We then
                      determine the direction of the project and understand your
                      goals and we combine your ideas with ours for an amazing
                      website.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="timeline_content">
                    <span>2007-2012</span>
                    <h4>Junior Developer</h4>
                    <p>
                      We gather your business and products information. We then
                      determine the direction of the project and understand your
                      goals and we combine your ideas with ours for an amazing
                      website.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="timeline_content">
                    <span>2012-2015</span>
                    <h4>Senior Developer</h4>
                    <p>
                      We gather your business and products information. We then
                      determine the direction of the project and understand your
                      goals and we combine your ideas with ours for an amazing
                      website.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="timeline_content">
                    <span>2015-2018</span>
                    <h4>Project Manager</h4>
                    <p>
                      We gather your business and products information. We then
                      determine the direction of the project and understand your
                      goals and we combine your ideas with ours for an amazing
                      website.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
