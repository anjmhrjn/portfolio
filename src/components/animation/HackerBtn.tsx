"use client"
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '../ui/button';

const HackerBtn = ({ label }: { label: string }) => {
  const [displayText, setDisplayText] = useState(label);

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  return (
    <Button size={'lg'} className='text-base px-5 py-6' onClick={() => {
      const link = document.createElement("a");
      link.href = "/AnujMaharjan_Resume.pdf"; // path in public folder
      link.download = "AnujMaharjan_Resume.pdf";
      link.click();
    }}>
      <Download className="mx-1" />
      {displayText}
    </Button>
  );
};

export default HackerBtn;
