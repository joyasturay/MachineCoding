import { useState } from "react";

export function Accordion() {
  const [openIndex, setOpenindex] = useState<number | null>(null);
  const data = [
    {
      key: 1,
      title: "hello1",
      content: "hello from hello 1",
    },
    {
      key: 2,
      title: "hello2",
      content: "hello from hello 2",
    },
  ];
  return (
    <div>
      {data.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.key}>
            <p
              onClick={() => setOpenindex(isOpen ? null : i)}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {item.title} <span>{isOpen ? "-" : "+"}</span>
            </p>
                {isOpen && <p>{item.content}</p>}
          </div>
        );
      })}
    </div>
  );
}
