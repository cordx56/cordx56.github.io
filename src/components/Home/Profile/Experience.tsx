import Timeline from "@/components/Timeline";

const Experience = () => (
  <>
    <h2 className="h2">Experience</h2>
    <Timeline
      list={[
        {
          data: (
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
          from: { year: 2020, month: 8 },
          to: { year: 2020, month: 8 },
        },
        {
          data: (
            <>
              <a
                href="https://cordx56.hatenablog.com/entry/2021/09/10/185455"
                target="_blank"
                rel="noreferrer"
              >
                DMM GUILD (internship)
              </a>
            </>
          ),
          from: { year: 2021, month: 8 },
          to: { year: 2021, month: 9 },
        },
        {
          data: (
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
          from: { year: 2021, month: 11 },
          to: { year: 2022, month: 1 },
        },
        {
          data: (
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
          from: { year: 2022, month: 2 },
          to: { year: 2022, month: 3 },
        },
        {
          data: (
            <>
              Gaiax internship{" "}
              <small>(Django/React/TypeScript/Vue.js/AWS)</small>
            </>
          ),
          from: { year: 2020, month: 8 },
          to: { year: 2022, month: 5 },
        },
      ]}
    />
  </>
);

export default Experience;
