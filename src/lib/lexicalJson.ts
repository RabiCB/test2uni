export const lexicalJsonToHtml = (lexicalJson: string | object): string => {
  try {
    const json =
      typeof lexicalJson === "string" ? JSON.parse(lexicalJson) : lexicalJson;
    const text = json?.root?.children
      ?.map((node: any) =>
        node.children
          ?.map((child: any) => child.text) 
          .join(" ")
      )
      .join("\n");
    return `<p>${text || ""}</p>`;
  } catch {
    return "";
  }
};