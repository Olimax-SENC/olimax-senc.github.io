import { useDocumentTitle as useMantineDocumentTitle } from "@mantine/hooks";

export function useDocumentTitle(title: string) {
  const titleWithSuffix = `${title} | Olimax`;
  return useMantineDocumentTitle(titleWithSuffix);
}
