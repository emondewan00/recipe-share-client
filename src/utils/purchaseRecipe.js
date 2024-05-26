
const purchaseRecipe = async (params) => {
  try {
    console.log(params);
    const server = import.meta.env.VITE_SERVER;
    const res = await fetch(`${server}recipes/purchased`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: ` ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(params),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default purchaseRecipe;
