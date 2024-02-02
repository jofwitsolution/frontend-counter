import Counter from "@/components/Counter";
import CounterWrapper from "@/components/CounterWrapper";

const counters = [
  {
    title: "Time Counter",
  },
  {
    title: "Money Counter",
  },
  {
    title: "Person Counter",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-y-4 items-center py-8">
      {counters.map((counter, i) => (
        <Counter key={counter.title + i} title={counter.title} />
      ))}

      <CounterWrapper>
        <Counter title={"Last Counter"} />
      </CounterWrapper>
    </div>
  );
}
