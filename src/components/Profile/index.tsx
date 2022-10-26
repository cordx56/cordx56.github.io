import TimeLineTable, { TimeLineRow } from "../Common/TimeLineTable";

const affiliation: TimeLineRow[] = [
  {
    begin: "2017",
    end: "2021",
    node: (
      <>
        Shibaura Institute of Technology, Information Science and Engineering
        (Bachelor of Engineering)
      </>
    ),
  },
  {
    begin: "2021",
    end: "Present",
    node: (
      <>
        Shibaura Institute of Technology, Electrical Engineering and Computer
        Science
      </>
    ),
  },
];
const experience: TimeLineRow[] = [
  {
    begin: "2020/08",
    end: "2020/08",
    node: (
      <>
        <a
          href="https://cordx56.hatenablog.com/entry/2020/08/31/104330"
          target="_blank"
          rel="noreferrer"
        >
          Hatena Summer Internship
        </a>{" "}
        <small>(Golang, K8s)</small>
      </>
    ),
  },
  {
    begin: "2020/08",
    end: "2022/05",
    node: (
      <>
        Gaiax Internship <small>(Django/React/TypeScript/Vue.js/AWS)</small>
      </>
    ),
  },
  {
    begin: "2021/08",
    end: "2021/09",
    node: (
      <>
        <a
          href="https://cordx56.hatenablog.com/entry/2021/09/10/185455"
          target="_blank"
          rel="noreferrer"
        >
          DMM GUILD (Internship)
        </a>
      </>
    ),
  },
  {
    begin: "2021/11",
    end: "2022/01",
    node: (
      <>
        <a
          href="https://cordx56.hatenablog.com/entry/2022/01/31/194235"
          target="_blank"
          rel="noreferrer"
        >
          pixiv internship
        </a>
      </>
    ),
  },
  {
    begin: "2022/02",
    end: "2022/03",
    node: (
      <>
        <a
          href="https://cordx56.hatenablog.com/entry/2022/03/28/203002"
          target="_blank"
          rel="noreferrer"
        >
          mixi internship
        </a>
      </>
    ),
  },
];
const certificate: TimeLineRow[] = [
  {
    begin: "2018/05",
    end: "2018/05",
    node: <>基本情報技術者試験(FE) 合格</>,
  },
  {
    begin: "2018/12",
    end: "2018/12",
    node: <>応用情報技術者試験(AP) 合格</>,
  },
];

const Profile = () => (
  <section className="card">
    <h1 className="h1">Profile</h1>
    <p className="p">Bachelor of Engineering</p>
    <p className="p">
      Programming Language, Natural Language Processing and Web Service
    </p>
    <h2 className="h2">Affiliation</h2>
    <TimeLineTable timeLineRows={affiliation} />
    <h2 className="h2">Experience</h2>
    <TimeLineTable timeLineRows={experience} />
    <h2 className="h2">Certificate</h2>
    <TimeLineTable timeLineRows={certificate} />
  </section>
);

export default Profile;
