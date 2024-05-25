const postOrLoginUser = async (user) => {
  try {
    const server = import.meta.env.VITE_SERVER;
    const res = await fetch(`${server}users`, {
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
