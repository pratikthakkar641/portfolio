import { client } from "../services/contentful";


export const getEductationInfo = async () => {
    const {items} = await client.getEntries({ content_type: "education" });
    if (!items || items.length == 0) {
      return null;
    }
    return items;
  };