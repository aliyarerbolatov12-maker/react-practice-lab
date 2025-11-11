import Accordion from "./Accordion";

export default function AccordionDemo() {
  const data = [
    { title: "Question 1", answer: "Answer 1: Lorem ipsum dolor sit amet." },
    { title: "Question 2", answer: "Answer 2: Consectetur adipiscing elit." },
    {
      title: "Question 3",
      answer: "Answer 3: Sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {data.map((item, index) => (
        <Accordion key={index} title={item.title} answer={item.answer} />
      ))}
    </div>
  );
}
