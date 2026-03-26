export const sentenceFormat = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);
export const slugify = (t: string) => t.toLowerCase().replace(/\s+/g, "-");
