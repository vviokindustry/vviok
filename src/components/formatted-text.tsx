import React from 'react';

interface FormattedTextProps {
  text?: string;
  className?: string;
}

export function FormattedText({ text, className }: FormattedTextProps) {
  if (!text) return null;

  // Splits by markdown bold pattern: **bold text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
          const boldContent = part.slice(2, -2);
          return (
            <strong key={idx} className="font-extrabold text-slate-900">
              {boldContent}
            </strong>
          );
        }
        return part;
      })}
    </span>
  );
}
