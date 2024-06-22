import ProgressBar from "react-bootstrap/ProgressBar";

const Progress = ({ value }) => {
  const per = Math.round((value.currentOutput / value.planOutput) * 100);

  return (
    <div>
      <h5>實際完成率</h5>
      <ProgressBar
        animated
        variant="info"
        now={per}
        label={`${per}%`}
        className="mb-2"
        style={{ fontFamily: "Zen Dots" }}
      />
    </div>
  );
};
export default Progress;
