import Timeline from "@/components/Timeline";

const Certificate = () => (
  <>
    <h2 className="h2">Certificate</h2>
    <Timeline
      list={[
        {
          data: <>基本情報技術者試験(FE) 合格</>,
          from: { year: 2018, month: 5 },
          to: { year: 2018, month: 5 },
        },
        {
          data: <>応用情報技術者試験(AP) 合格</>,
          from: { year: 2018, month: 12 },
          to: { year: 2018, month: 12 },
        },
      ]}
    />
  </>
);

export default Certificate;
