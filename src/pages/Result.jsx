import Analysis from "../components/Analysis";
import Summary from "../components/Summary"; // এক ধাপ বাইরে গিয়ে components ফোল্ডারে
export default function Result() {
  return (
    <>
      <Summary />
      <Analysis />
    </>
  );
}
