import Affiliation from "./Affiliation";
import Experience from "./Experience";
import Certificate from "./Certificate";

const Profile = () => (
  <section className="box">
    <h1 className="h1">Profile</h1>
    <p className="p">Bachelor of Engineering</p>
    <p className="p">
      Programming Language, Natural Language Processing and Web Service
    </p>
    <Affiliation />
    <Experience />
    <Certificate />
  </section>
);

export default Profile;
