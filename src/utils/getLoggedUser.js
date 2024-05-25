const getLoggedUser = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token || token === "undefined") return;
    const res = await fetch(`http://localhost:3000/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getLoggedUser;
