import Timeline from "@/components/Timeline";

const Affilitaion = () => (
  <>
    <h2 className="h2">Affiliation</h2>
    <Timeline
      list={[
        {
          data: (
            <>
              <div>Shibaura Institute of Technology</div>
              <div className="opacity-60">
                Information Science and Engineering
              </div>
              <div className="opacity-60">Bachelor of Engineering</div>
            </>
          ),
          from: { year: 2017 },
          to: { year: 2021 },
        },
        {
          data: (
            <>
              <div>Shibaura Institute of Technology</div>
              <div className="opacity-60">
                Electrical Engineering and Computer Science
              </div>
              <div className="opacity-60">Master of Engineering</div>
            </>
          ),
          from: { year: 2021 },
          to: { year: 2024 },
        },
        {
          data: (
            <>
              <div>Shibaura Institute of Technology</div>
              <div className="opacity-60">Functional Control Systems</div>
              <div className="opacity-60">Ph.D. student</div>
            </>
          ),
          from: { year: 2024 },
        },
      ]}
    />
  </>
);

export default Affilitaion;
