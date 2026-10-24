// Text in the data files can hold links written as [label](address) and bold words written as **words**;
// this splits such text into plain, linked and bold parts.

export type TextPart = { text: string; href?: string; strong?: boolean };

export function splitLinks(text: string): TextPart[] {
  const parts: TextPart[] = [];
  let last = 0;
  for (const match of text.matchAll(/\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g)) {
    if (match.index > last) parts.push({ text: text.slice(last, match.index) });
    parts.push(match[3] !== undefined ? { text: match[3], strong: true } : { text: match[1], href: match[2] });
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push({ text: text.slice(last) });
  return parts;
}
