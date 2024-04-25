import Affiliation from "./Affiliation";
import Experience from "./Experience";
import Certificate from "./Certificate";

const Profile = () => (
  <section id="profile" className="box">
    <h1 className="h1">Profile</h1>
    <p className="p">Master of Engineering</p>
    <p className="p">
      Research in Programming Language, Natural Language Processing as a hobby,
      and Web Service
    </p>
    <Affiliation />
    <Experience />
    <Certificate />
  </section>
);

export default Profile;
