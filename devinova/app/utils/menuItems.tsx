import { revalidatePath } from "next/cache";

const getData = async () => {
  const query = `
query {allMenuItems(sort:[{ orderRank:  ASC}]){
  label 
  link
  
  
  subMenuItem{
    label 
    link
  }
}
}
    `;

  try {
    const res = await fetch(
      "https://426kwv4m.api.sanity.io/v2023-08-01/graphql/production/default",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    );

    const { data, errors } = await res.json();

    if (errors) {
      console.error(errors);
    } else {
      // revalidatePath("/")
      return data.allMenuItems;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export default getData;
