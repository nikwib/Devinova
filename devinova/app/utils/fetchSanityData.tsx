import { revalidatePath } from "next/cache";

const getData = async (query: string, contentName: string) => {
  try {
    const URL = process.env.FETCH_URL;
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
