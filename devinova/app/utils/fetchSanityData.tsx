import { revalidatePath } from "next/cache";

const getData = async (query: string, contentName: string) => {
  try {
    const URL =
      "https://426kwv4m.api.sanity.io/v2023-08-01/graphql/production/default";
    const res = await fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const { data, errors } = await res.json();
    const { [contentName]: sanityData } = data;
    

    if (errors) {
      console.error(errors);
    } else {
      revalidatePath("/");
      return sanityData;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export default getData;
