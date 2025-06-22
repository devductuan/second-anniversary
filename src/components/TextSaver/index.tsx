"use client";
import { useEffect, useState } from "react";

export default function TextReader() {
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchText = async () => {
      const res = await fetch("/notes/note-1.txt");
      const data = await res.text();
      setText(data);
    };

    fetchText();
  }, []);

  return (
    <textarea
      className=" border p-2 w-full m-4"
      style={{ height: "800px" }}
      value={text}
      readOnly
    />
  );
}
