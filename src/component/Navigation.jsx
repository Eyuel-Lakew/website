import Login from "./login";

function Navigation(props) {
  const me = props.person;
  return (
    <div className="first">
      <div className="namecont">
        <h3>Eyuel lakew</h3>
        <code className="disc">
          Software engineer and Machine learning expert
        </code>
      </div>

      <div className="hey">
        <div className="inside x">
          <div className="four">
            <h1>Frontend Development</h1>
            <p>
              I can develop web applications and websites using a javascript
              frameworks and libraries like React js,Angular,and Vue.
            </p>
          </div>
        </div>
        <div className="inside x">
          <div className="four">
            <h1>Backend development</h1>
            <p>
              I can build web applications using backend frameworks like
              Laravel,Django,Express,and a javascript library React native for
              native mobile applications.
            </p>
          </div>
        </div>
        <div className="inside x">
          <div className="four">
            <h1>Machine learning</h1>
            <p>
              I have a Machine learning skill to train a model with python
              libraries like Numpy,Pandas,MatplotLib,and Sklearn.
            </p>
          </div>
        </div>
        <div className="inside x">
          <div className="four">
            <h1>Data Analysis</h1>
            <p>I can manipulate and analyse data using Pandas library.</p>
          </div>
        </div>
        <div className="inside insideone">
          <div className="forminside">
            <p>
              ALL IN ONE PLACE <br></br> EITHER FIXED OR CONTRACT JOBS ARE
              AVAILABLE FOR ALL CLIENTS
            </p>
            <form action="mailto:jobossel67@gmail.com">
              <input
                name="email"
                type="email"
                placeholder="Enter your email..."
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
