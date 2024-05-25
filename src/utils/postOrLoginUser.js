const postOrLoginUser = async (user) => {
  try {
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...user,
        coins: 10,
        recipes: [],
        likes: [],
        createdAt: Date.now(),
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default postOrLoginUser;
