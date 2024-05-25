const addRecipe = async (event) => {
  try {
    const server = import.meta.env.VITE_SERVER;
    const form = new FormData(event.target);
    const values = Object.fromEntries(form.entries());
    const imageFile = new FormData();
    imageFile.append("image", form.get("image"));

    const uploadImage = await fetch(
      "https://api.imgbb.com/1/upload?key=37f1800ef998ff4c969f91bfda497c58",
      {
        method: "POST",
        body: "image",
      }
    );
    const image = await uploadImage.json();

    if (image.status === 200) {
      const postRecipe = await fetch(`${server}"recipes"`, {
        method: "POST",
        body: JSON.stringify({
          ...values,
          image: image?.data?.url,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
      });
      const recipeRes = await postRecipe.json();
      console.log(recipeRes);
      return recipeRes;
    }
    throw new Error("Something went wrong");
  } catch (error) {
    console.log(error);
  }
};

export default addRecipe;

