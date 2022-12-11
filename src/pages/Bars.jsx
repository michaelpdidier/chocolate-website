import Bar from "../components/Bar";
import chocolateBarData from "../data/chocolateBarData.jsx";

export default function Bars() {
  const chocolateBars = chocolateBarData.map((item) => {
    return (
      <Bar
        key={item.id} // you need a key element to prevent warning
        {...item}
      />
    );
  });

  return (
    <main className="bars-container">
      <section className="bars-list">{chocolateBars}</section>
    </main>
  );
}
